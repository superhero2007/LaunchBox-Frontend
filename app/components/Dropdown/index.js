import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import DropdownButton from './DropdownButton';
import DropdownButtonSpan from './DropdownButtonSpan';
import DropdownContent from './DropdownContent';
import DropdownElement from './DropdownElement';
import ThreeDot from '../../images/three_dot.png';

const Dropdown = props => (
  <Wrapper className="dropdown">
    <DropdownButton>
      <DropdownButtonSpan color={props.color}>{props.value}</DropdownButtonSpan>
      <img src={ThreeDot} alt="Dropdown Button" />
    </DropdownButton>
    <DropdownContent>
      <DropdownElement>Rename</DropdownElement>
      <DropdownElement>Duplicate</DropdownElement>
      <DropdownElement>Delete</DropdownElement>
    </DropdownContent>
  </Wrapper>
);

Dropdown.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
};

export default Dropdown;
