import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(76, 76, 97, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const ModalWrapper = styled.div`
  background: #fff;
  padding: 40px 36px;
  width: 420px;
  position: relative;
`;

const ModalCloser = styled.div`
  position: absolute;
  right: -30px;
  top: -5px;
  width: 15px;
  height: 15px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

const Modal = props => (
  <Wrapper>
    <ModalWrapper>
      <ModalCloser onClick={props.onClose}>
        <i className="fas fa-times" />
      </ModalCloser>
      {props.children}
    </ModalWrapper>
  </Wrapper>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
};

export default Modal;
