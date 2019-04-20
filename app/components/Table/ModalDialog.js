import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 8px 0;
`;

const ModalHeader = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const ModalText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #6c4853;
  padding: 0 2rem;
  white-space: pre-line;
  margin-bottom: 1.5rem;
`;

const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 164px;
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
`;

const DeleteButton = styled(Button)`
  border: 2px solid #e37898;
  background: #e37898;
  color: #fff;

  &:hover {
    color: #e37898;
    background: #fff;
  }
`;

const CancelButton = styled(Button)`
  border: 2px solid #ececf6;
  color: #6c4853;

  &:hover {
    color: #fff;
    background: #6c4853;
  }
`;

const ModalDialog = props => (
  <Wrapper>
    <ModalHeader>
      <ModalText>
        {`Are you sure you want
        to delete the column "${props.element.name}"?`}
      </ModalText>
      <ModalAction>
        <DeleteButton onClick={props.onDelete}>Delete</DeleteButton>
        <CancelButton onClick={props.onClose}>Cancel</CancelButton>
      </ModalAction>
    </ModalHeader>
  </Wrapper>
);

ModalDialog.propTypes = {
  element: PropTypes.object,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
};

export default ModalDialog;
