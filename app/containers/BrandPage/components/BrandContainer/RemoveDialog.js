import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const ModalText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: normal;
  text-align: center;
  color: #1b367c;
  margin-bottom: 28px;
`;

const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top 38px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 7px;
`;

const RemoveButton = styled(Button)`
  background: #ec6689;
  color: #fff;
  margin-left: 1rem;

  &:hover {
    color: #ec6689;
    background: #fff;
    border: 1px solid #ec6689;
  }
`;

const CancelButton = styled(Button)`
  border: 2px solid #ececf6;
  color: #1b367c;

  &:hover {
    color: #fff;
    background: #1b367c;
  }
`;

const ModalContent = styled.div`
  padding: 0 40px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;

  span {
    color: #3166ed;
  }
`;

const RemoveDialog = props => (
  <Wrapper>
    <ModalHeader>
      <ModalText>Remove User</ModalText>
    </ModalHeader>
    <ModalContent>
      Are you sure you want to remove <span>{props.element}</span> from
      <span>&nbsp;Ketchup Creative</span>?
    </ModalContent>
    <ModalAction>
      <CancelButton onClick={props.onClose}>CANCEL</CancelButton>
      <RemoveButton onClick={props.onDelete}>REMOVE</RemoveButton>
    </ModalAction>
  </Wrapper>
);

RemoveDialog.propTypes = {
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  element: PropTypes.string,
};

export default RemoveDialog;
