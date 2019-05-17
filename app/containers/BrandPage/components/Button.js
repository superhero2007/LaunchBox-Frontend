import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

const ButtonCloser = styled.div`
  position: absolute;
  right: -10px;
  top: -5px;
  width: 15px;
  height: 15px;
  font-size: 10px;
  background: #f14040;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
`;

const Button = props => (
  <ButtonWrapper color={props.color}>
    <ButtonCloser onClick={props.onClose} className="button__closer">
      <i className="fas fa-times" />
    </ButtonCloser>
    <span>{props.icon}</span>
    <span>{props.value}</span>
  </ButtonWrapper>
);

Button.propTypes = {
  icon: PropTypes.any,
  value: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func,
};

export default Button;
