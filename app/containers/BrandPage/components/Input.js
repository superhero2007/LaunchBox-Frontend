import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './InputWrapper';
import InputLabel from './InputLabel';
import InputValue from './InputValue';

const Input = props => (
  <InputWrapper>
    <InputLabel>{props.label}</InputLabel>
    <InputValue defaultValue={props.value} />
  </InputWrapper>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
