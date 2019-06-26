/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
  getMembers,
  createMember,
  updateMember,
  deleteMember,
  getInvitations,
  createInvitation,
  updateInvitation,
  deleteInvitation,
} from 'containers/BrandPage/actions';
import {
  makeSelectBrands,
  makeSelectMembers,
  makeSelectInvitations,
} from 'containers/BrandPage/selectors';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import ModalDialog from './ModalDialog';

class BrandContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
    };
  }

  componentDidMount() {
    this.props.onLoadBrands();
  }

  closeModal = () => {
    this.setState({ type: null });
  };

  onSelect = value => {
    if (this.state.type === 'Brand') {
      this.props.onUpdateBrand(value);
    }
    if (this.state.type === 'Member') {
      this.props.onUpdateMember(value);
    }
    this.setState({ type: null });
  };

  onAdd = value => {
    if (this.state.type === 'Brand') {
      this.props.onCreateBrand(value);
    }
    if (this.state.type === 'Member') {
      this.props.onCreateMember(value);
    }
    this.setState({ type: null });
  };

  onDelete = _id => {
    if (this.state.type === 'Brand') {
      this.props.onDeleteBrand(_id);
    }
    if (this.state.type === 'Member') {
      this.props.onDeleteMember(_id);
    }
  };

  updateModal = element => {
    this.setState({
      type: element,
    });
  };

  render() {
    return (
      <Wrapper>
        {this.state.type && (
          <Modal onClose={this.closeModal}>
            <ModalDialog
              title="Select Brand"
              onSelect={this.onSelect}
              onAdd={this.onAdd}
              onClose={this.closeModal}
            />
          </Modal>
        )}
        <Content>
          <ElementWrapper>
            <Element
              label="Brand"
              value="Ketchup Creative"
              onClick={this.updateModal}
            />
          </ElementWrapper>
          <ElementWrapper>
            <Element
              label="Members"
              value="Paul, Sindri, Arnar +3 others"
              onClick={this.updateModal}
            />
          </ElementWrapper>
        </Content>
      </Wrapper>
    );
  }
}

BrandContainer.propTypes = {
  brands: PropTypes.array,
  members: PropTypes.array,
  invitations: PropTypes.array,
  onLoadBrands: PropTypes.func,
  onCreateBrand: PropTypes.func,
  onUpdateBrand: PropTypes.func,
  onDeleteBrand: PropTypes.func,
  onLoadMembers: PropTypes.func,
  onCreateMember: PropTypes.func,
  onUpdateMember: PropTypes.func,
  onDeleteMember: PropTypes.func,
  onLoadInvitations: PropTypes.func,
  onCreateInvitation: PropTypes.func,
  onUpdateInvitation: PropTypes.func,
  onDeleteInvitation: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  brands: makeSelectBrands(),
  members: makeSelectMembers(),
  invitations: makeSelectInvitations(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadBrands: () => dispatch(getBrands.request()),
    onCreateBrand: value => dispatch(createBrand.request(value)),
    onUpdateBrand: value => dispatch(updateBrand.request(value)),
    onDeleteBrand: value => dispatch(deleteBrand.request(value)),
    onLoadMembers: () => dispatch(getMembers.request()),
    onCreateMember: value => dispatch(createMember.request(value)),
    onUpdateMember: value => dispatch(updateMember.request(value)),
    onDeleteMember: value => dispatch(deleteMember.request(value)),
    onLoadInvitations: () => dispatch(getInvitations.request()),
    onCreateInvitation: value => dispatch(createInvitation.request(value)),
    onUpdateInvitation: value => dispatch(updateInvitation.request(value)),
    onDeleteInvitation: value => dispatch(deleteInvitation.request(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrandContainer);
