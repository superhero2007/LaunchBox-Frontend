/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from 'containers/BrandPage/reducer';
import saga from 'containers/BrandPage/saga';

import {
  getMembers,
  updateMember,
  deleteMember,
  getInvitations,
  createInvitation,
  deleteInvitation,
} from 'containers/BrandPage/actions';
import {
  makeSelectMembers,
  makeSelectInvitations,
} from 'containers/BrandPage/selectors';

import { makeSelectCompany } from 'services/api/selectors';

import Header from 'components/Header';
import ExitSetings from 'images/exit-settings.svg';
import RemoveAccount from 'images/remove.svg';

const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #f8f8ff;
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackToSettings = styled(Link)`
  position: absolute;
  top: 140px;
  left: 26px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`;

const Content = styled.div`
  margin-top: 150px;
  width: 688px;
  max-width: 90%;
  padding: 40px;
  text-align: center;
  border-radius: 7px;
`;

const Back = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #1b367c;
  margin-left: 20px;
`;

const ContentCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 54px;
`;

const ContentCountItem = styled.div`
  width: 120px;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #1b367c;
`;

const SubTitle = styled.div`
  margin-top: 12px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #1b367c;
`;

const Table = styled.div`
  margin-bottom: 44px;
  background: #fff;
  border: 2px solid rgba(66, 77, 107, 0.2);
  box-sizing: border-box;
  border-radius: 7px;
`;

const TableItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 35px;

  &:not(:last-child) {
    border-bottom: 2px solid #d6dbe9;
  }
`;

const ItemName = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  border-radius: 7px;
  width: 60%;
  text-align: left;
`;

const ItemRole = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  color: #1b367c;
  border-radius: 7px;
  opacity: 0.2;
  width: 15%;
  text-align: left;

  &.active:not(.disabled) {
    opacity: 1;
  }

  &:not(.disabled):hover {
    color: #3166ed;
    opacity: 1;
  }
`;

const ItemClose = styled.div`
  opacity: 0.2;
  width: 10%;

  img {
    height: 10px;
    width: 10px;
  }

  &:hover {
    opacity: 1;
  }
`;

const Disabled = styled.span`
  opacity: 0.2;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(10, 19, 41, 0.68);
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 7px;
  padding: 36px 40px;
  width: 424px;
`;

const ModalTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #1b367c;
`;

const ModalInput = styled.input`
  margin-top: 28px;
  width: 344px;
  height: 56px;
  border: 2px solid rgba(66, 77, 107, 0.2);
  border-radius: 7px;
  padding: 16px 18px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;

  &::placeholder {
    color: rgba(66, 77, 107, 0.5);
  }
`;

const ModalDescription = styled.div`
  margin-top: 28px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  padding: 0 40px;

  span {
    color: #3166ed;
  }
`;

const ModalAction = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalCancel = styled.button`
  width: 164px;
  height: 40px;
  border: 2px solid #d6dbd9;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;
  background: #fff;
  border-radius: 7px;

  &:hover {
    background: #1b367c;
    border: 0;
    color: #fff;
  }
`;

const ModalConfirm = styled.button`
  width: 164px;
  height: 40px;
  background: #ec6689;
  border-radius: 7px;

  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    background: #fff;
    color: #ec6689;
    border: 1px solid #ec6689;
  }
`;

const AddButton = styled.button`
  width: 164px;
  height: 40px;
  background: #1b367c;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  border-radius: 7px;

  &:hover:not(:disabled) {
    color: #1b367c;
    border: 2px solid #1b367c;
    background: #fff;
  }

  &:disabled {
    opacity: 0.2;
  }
`;

class EditMembers extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      type: null,
      selected: null,
    };
  }

  componentDidMount() {
    this.props.onLoadMembers();
    this.props.onLoadInvitations();
  }

  handleDeleteMember = selected => {
    this.setState({
      selected,
      type: 'DeleteMember',
    });
  };

  handleDeleteInvitation = selected => {
    this.setState({
      selected,
      type: 'DeleteInvitation',
    });
  };

  handleMember = (selected, type) => {
    this.setState({
      selected,
      type,
    });
  };

  handleClose = () => {
    this.setState({
      type: null,
    });
  };

  handleClick = () => {
    this.setState({
      type: 'Add',
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleConfirm = () => {
    const { type, selected, value } = this.state;
    if (type === 'Add') {
      this.props.onCreateInvitation({ value });
    } else if (type === 'DeleteMember') {
      this.props.onDeleteMember(selected._id);
    } else if (type === 'DeleteInvitation') {
      this.props.onDeleteInvitation(selected._id);
    } else {
      this.props.onUpdateMember({ role: type, _id: selected._id });
    }
    this.setState({
      value: '',
      type: null,
      selected: null,
    });
  };

  render() {
    const { company, invitations } = this.props;
    let { members } = this.props;
    members = members.filter(member => member.role);
    const totalLength = company.subscription.users + 3;
    const membersLength = members.length;
    const adminLength = members.filter(member => member.role === 'Admin')
      .length;
    const invitationsLength = invitations.length;
    const availableLength = totalLength - membersLength - invitationsLength;

    const addDisabled = totalLength <= membersLength + invitationsLength;

    const memberList = members.map(member => (
      <TableItem key={member.email}>
        <ItemName>{member.fullName}</ItemName>
        <ItemRole
          className={member.role === 'Member' && 'active'}
          onClick={() => this.handleMember(member, 'Member')}
        >
          MEMBER
        </ItemRole>
        <ItemRole
          className={member.role === 'Admin' && 'active'}
          onClick={() => this.handleMember(member, 'Admin')}
        >
          ADMIN
        </ItemRole>
        <ItemClose onClick={() => this.handleDeleteMember(member)}>
          <img src={RemoveAccount} alt="Delete Member" />
        </ItemClose>
      </TableItem>
    ));

    const invitationList = invitations.map(invitation => (
      <TableItem key={invitation.value}>
        <ItemName>
          {invitation.value}
          <Disabled>(invite pending)</Disabled>
        </ItemName>
        <ItemRole className="disabled">MEMBER</ItemRole>
        <ItemRole className="disabled">ADMIN</ItemRole>
        <ItemClose onClick={() => this.handleDeleteInvitation(invitation)}>
          <img src={RemoveAccount} alt="Delete Invitation" />
        </ItemClose>
      </TableItem>
    ));

    const { type, selected, value } = this.state;

    let modal = '';

    if (type === 'DeleteInvitation') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Remove Invitation</ModalTitle>
            <ModalDescription>
              Are you sure you want to remove <span>{selected.value} </span>
              from <span>Company Account</span>?<br />
              <br />
              The member will lose access to all brands on your account.
            </ModalDescription>
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <ModalConfirm onClick={this.handleConfirm}>REMOVE</ModalConfirm>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    if (type === 'DeleteMember') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Remove Member</ModalTitle>
            <ModalDescription>
              Are you sure you want to remove <span>{selected.fullName} </span>
              from <span>Company Account</span>?<br />
              <br />
              The member will lose access to all brands on your account.
            </ModalDescription>
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <ModalConfirm onClick={this.handleConfirm}>Remove</ModalConfirm>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    if (type === 'Admin') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Edit Member Access</ModalTitle>
            <ModalDescription>
              Are you sure you want to give <span>{selected.fullName} </span>
              access to all <span>Admin Controls</span>?<br />
              <br />
              <span>Admins</span> can edit subscription, payment method, brands
              and members.
            </ModalDescription>
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <ModalConfirm onClick={this.handleConfirm}>Confirm</ModalConfirm>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    if (type === 'Member') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Edit Member Access</ModalTitle>
            <ModalDescription>
              Are you sure you want to remove <span>Admin Controls </span>
              access to all <span>{selected.fullName}</span>?<br />
              <br />
              <span>{selected.fullName}</span> can no longer edit subscription,
              payment method, brands and members.
            </ModalDescription>
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <ModalConfirm onClick={this.handleConfirm}>Confirm</ModalConfirm>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    if (type === 'Add') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Add New Member</ModalTitle>
            <ModalInput
              value={value}
              type="text"
              placeholder="Invite new member by email"
              onChange={this.handleChange}
            />
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <AddButton onClick={this.handleConfirm}>Add</AddButton>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    return (
      <FullScreen>
        {modal}
        <Header />
        <BackToSettings to="/settings">
          <img src={ExitSetings} alt="Exit Settings" />
          <Back className="settings__exit-title">Back to Settings</Back>
        </BackToSettings>
        <Content>
          <ContentCount>
            <ContentCountItem>
              <Title>{membersLength}</Title>
              <SubTitle>MEMBERS</SubTitle>
            </ContentCountItem>

            <ContentCountItem>
              <Title>{adminLength}</Title>
              <SubTitle>ADMINS</SubTitle>
            </ContentCountItem>

            <ContentCountItem>
              <Title>{invitationsLength}</Title>
              <SubTitle>PENDING INVITES</SubTitle>
            </ContentCountItem>

            <ContentCountItem>
              <Title>{availableLength}</Title>
              <SubTitle>SEATS AVAILABLE</SubTitle>
            </ContentCountItem>
          </ContentCount>
          {!!(invitationsLength + membersLength) && (
            <Table>
              {memberList}
              {invitationList}
            </Table>
          )}
          <AddButton onClick={this.handleClick} disabled={addDisabled}>
            ADD NEW
          </AddButton>
        </Content>
      </FullScreen>
    );
  }
}

EditMembers.propTypes = {
  company: PropTypes.object,
  members: PropTypes.array,
  invitations: PropTypes.array,
  onLoadMembers: PropTypes.func,
  onUpdateMember: PropTypes.func,
  onDeleteMember: PropTypes.func,
  onLoadInvitations: PropTypes.func,
  onCreateInvitation: PropTypes.func,
  onDeleteInvitation: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
  members: makeSelectMembers(),
  invitations: makeSelectInvitations(),
});

const mapDispatchToProps = dispatch => ({
  onLoadMembers: () => dispatch(getMembers.request()),
  onUpdateMember: value => dispatch(updateMember.request(value)),
  onDeleteMember: value => dispatch(deleteMember.request(value)),
  onLoadInvitations: () => dispatch(getInvitations.request()),
  onCreateInvitation: value => dispatch(createInvitation.request(value)),
  onDeleteInvitation: value => dispatch(deleteInvitation.request(value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'brand', reducer });
const withSaga = injectSaga({ key: 'brand', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditMembers);
