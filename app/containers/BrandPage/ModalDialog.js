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
  font-weight: 800;
  font-size: 17px;
  line-height: normal;
  text-align: center;
  color: #3d2f3d;
  margin-bottom: 28px;
`;

const ModalInput = styled.input`
  border: 2px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
  width: 344px;
  height: 56px;
  padding: 19px 17px 18px;
  margin-bottom: 21px;
  color: #6c4853;

  &::placeholder {
    color: rgba(61, 47, 61, 0.5);
  }
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

const AddButton = styled(Button)`
  border: 2px solid #3166ed;
  background: #3166ed;
  color: #fff;

  &:hover {
    color: #3166ed;
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
      {props.type === 'Input' && <ModalText>Add New Item</ModalText>}
      {props.type === 'Presence' && (
        <ModalText>Add New Online Presence</ModalText>
      )}
      {props.type === 'Input' && <ModalInput placeholder="Item Name" />}
      {props.type === 'Presence' && <ModalInput placeholder="URL" />}
      <ModalAction>
        <CancelButton onClick={props.onClose}>Cancel</CancelButton>
        <AddButton onClick={props.onAdd}>Add</AddButton>
      </ModalAction>
    </ModalHeader>
  </Wrapper>
);

ModalDialog.propTypes = {
  type: PropTypes.string,
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
};

export default ModalDialog;
