import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  deleteBrand,
  getMembers,
  deleteMember,
  getInvitations,
  createInvitation,
  deleteInvitation,
} from 'containers/BrandPage/actions';
import {
  makeSelectBrands,
  makeSelectInvitations,
  makeSelectMembers,
} from 'containers/BrandPage/selectors';

import { makeSelectUser, makeSelectCompany } from 'services/api/selectors';
import { createSubscribe, updateSubscribe } from 'services/api/actions';

import RightArrow from 'images/right-arrow.svg';
import RightArrowHover from 'images/right-arrow__hover.svg';
import RemoveAccount from 'images/remove.svg';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import {
  RightArrowWrapper,
  ItemClose,
  ModalItem,
  ModalContent,
  ModalText,
} from './Component';
import ModalDialog from './ModalDialog';
import AddDialog from './AddDialog';
import RemoveDialog from './RemoveDialog';

class BrandContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      selected: null,
    };
  }

  componentDidMount() {
    this.props.onLoadMembers();
    this.props.onLoadInvitations();
  }

  closeModal = () => {
    this.setState({ type: null });
  };

  onAdd = value => {
    const { type } = this.state;
    const { onCreateInvitation, history } = this.props;
    if (type === 'AddMembers') {
      onCreateInvitation(value);
    }
    if (type === 'AddBrand') {
      const { company, onCreateSubscribe, onUpdateSubscribe } = this.props;
      if (company.subscription) {
        const { users, brands, method } = company.subscription;
        const amount = method
          ? 9 + users * 4 + (brands + 1) * 6
          : 12 + users * 6 + (brands + 1) * 9;
        onUpdateSubscribe({
          subscription: {
            amount,
            method,
            users,
            brands: brands + 1,
            status: 1,
            date: new Date(),
          },
        });
      } else {
        onCreateSubscribe({
          subscription: {
            amount: 21,
            method: false,
            users: 0,
            brands: 1,
            status: 1,
            date: new Date(),
          },
        });
      }
      history.push('/new');
    }
    this.setState({ type: null });
  };

  updateModal = element => {
    const { brands, history, company } = this.props;
    const brandLength = company.subscription
      ? company.subscription.brands + 1
      : 1;
    if (element === 'AddBrand' && brandLength !== brands.length) {
      history.push('/new');
    }
    if (element === 'Brand' && !brands.length) {
      history.push('/new');
    } else {
      this.setState({
        type: element,
      });
    }
  };

  onDelete = () => {
    const { selected, type } = this.state;
    if (type === 'deleteMember') {
      this.props.onDeleteMember(selected._id);
    } else {
      this.props.onDeleteInvitation(selected._id);
    }
    this.setState({
      selected: null,
      type: null,
    });
  };

  handleSelect = _id => {
    this.setState({ type: null });
    this.props.onSelectBrand(_id);
  };

  render() {
    const { type, selected } = this.state;
    const { brands, invitations, user, selectedBrand } = this.props;
    let { members } = this.props;
    members = members.filter(member => member.role);
    const selectBrand = brands.find(brand => brand._id === selectedBrand);

    let modal;

    if (type === 'Brand') {
      modal = (
        <ModalDialog
          onAdd={this.updateModal}
          onClose={this.closeModal}
          type={type}
        >
          <ModalContent>
            {brands.map(element => (
              <ModalItem
                key={element._id}
                className={selectedBrand === element._id && 'active'}
                onClick={() => this.handleSelect(element._id)}
              >
                <div>{element.value}</div>
                <div>
                  <RightArrowWrapper>
                    <img className="origin" src={RightArrow} alt="Arrow" />
                    <img
                      className="hover"
                      src={RightArrowHover}
                      alt="Arrow Hover"
                    />
                  </RightArrowWrapper>
                </div>
              </ModalItem>
            ))}
          </ModalContent>
        </ModalDialog>
      );
    }

    if (type === 'Members') {
      modal = (
        <ModalDialog
          onAdd={this.updateModal}
          onClose={this.closeModal}
          type={type}
        >
          <ModalContent>
            {members.map(element => (
              <ModalItem key={element._id} className="members">
                <div>{element.fullName}</div>
                <div>
                  <ItemClose
                    onClick={() => {
                      this.updateModal('deleteMember');
                      this.setState({ selected: element });
                    }}
                  >
                    <img src={RemoveAccount} alt="Delete Member" />
                  </ItemClose>
                </div>
              </ModalItem>
            ))}
            {invitations.map(element => (
              <ModalItem key={element._id} className="members">
                <div>{element.value}</div>
                <div>
                  <ItemClose
                    onClick={() => {
                      this.updateModal('deleteInvitation');
                      this.setState({ selected: element });
                    }}
                  >
                    <img src={RemoveAccount} alt="Delete Invitation" />
                  </ItemClose>
                </div>
              </ModalItem>
            ))}
          </ModalContent>
        </ModalDialog>
      );
    }

    if (type === 'deleteMember' || type === 'deleteInvitation') {
      modal = (
        <RemoveDialog
          onDelete={this.onDelete}
          onClose={this.closeModal}
          element={type === 'deleteMember' ? selected.fullName : selected.value}
        />
      );
    }

    if (type === 'AddMembers') {
      modal = (
        <AddDialog onAdd={this.onAdd} onClose={this.closeModal} type={type} />
      );
    }

    if (type === 'AddBrand') {
      modal = (
        <ModalDialog
          onAdd={this.onAdd}
          onClose={this.closeModal}
          type={type}
          title="Update Subscription"
          addString="YES"
          cancelString="NO"
        >
          <ModalText>
            You currently have no additional brands available in your
            subscription. Do you want to add one additional brand for $9?
          </ModalText>
        </ModalDialog>
      );
    }

    const otherLength =
      members.length > 3
        ? members.length - 3 + invitations.length
        : invitations.length;
    const memberValue = `${members
      .slice(0, 3)
      .map(member => member.fullName.split(' ')[0])
      .join(', ')}${otherLength ? ` +${otherLength} others` : ''}`;

    return (
      <Wrapper>
        {type && <Modal onClose={this.closeModal}>{modal}</Modal>}
        <Content>
          <ElementWrapper>
            <Element
              label="Brand"
              value={brands.length ? selectBrand.value : user.companyName}
              onClick={this.updateModal}
            />
          </ElementWrapper>
          <ElementWrapper>
            <Element
              label="Members"
              value={memberValue}
              onClick={this.updateModal}
            />
          </ElementWrapper>
        </Content>
      </Wrapper>
    );
  }
}

BrandContainer.propTypes = {
  history: PropTypes.object,
  selectedBrand: PropTypes.string,
  user: PropTypes.object,
  company: PropTypes.object,
  brands: PropTypes.array,
  members: PropTypes.array,
  invitations: PropTypes.array,
  onLoadMembers: PropTypes.func,
  onDeleteMember: PropTypes.func,
  onLoadInvitations: PropTypes.func,
  onCreateInvitation: PropTypes.func,
  onDeleteInvitation: PropTypes.func,
  onSelectBrand: PropTypes.func,
  onCreateSubscribe: PropTypes.func,
  onUpdateSubscribe: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  company: makeSelectCompany(),
  brands: makeSelectBrands(),
  members: makeSelectMembers(),
  invitations: makeSelectInvitations(),
});

const mapDispatchToProps = dispatch => ({
  onDeleteBrand: value => dispatch(deleteBrand.request(value)),
  onLoadMembers: () => dispatch(getMembers.request()),
  onDeleteMember: value => dispatch(deleteMember.request(value)),
  onLoadInvitations: () => dispatch(getInvitations.request()),
  onCreateInvitation: value => dispatch(createInvitation.request(value)),
  onDeleteInvitation: value => dispatch(deleteInvitation.request(value)),
  onCreateSubscribe: value => dispatch(createSubscribe.request(value)),
  onUpdateSubscribe: value => dispatch(updateSubscribe.request(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrandContainer);
