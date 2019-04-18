import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';

const Button = props => (
  <ButtonWrapper color={props.color}>
    <span>{props.icon}</span>
    <span>{props.value}</span>
  </ButtonWrapper>
);

Button.propTypes = {
  icon: PropTypes.any,
  value: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
