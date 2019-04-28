import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import DropdownButton from './DropdownButton';
import DropdownButtonSpan from './DropdownButtonSpan';
import DropdownContent from './DropdownContent';
import DropdownElement from './DropdownElement';
import ThreeDot from '../../images/three_dot.png';

const dropdownElementList = list =>
  list.map(element => (
    <DropdownElement key={element.label} onClick={element.func}>
      {element.label}
    </DropdownElement>
  ));

const Dropdown = props => (
  <Wrapper className="dropdown">
    <DropdownButton>
      <DropdownButtonSpan color={props.color}>{props.value}</DropdownButtonSpan>
      <img src={ThreeDot} alt="Dropdown Button" />
    </DropdownButton>
    <DropdownContent>{dropdownElementList(props.dropdownList)}</DropdownContent>
  </Wrapper>
);

Dropdown.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  dropdownList: PropTypes.array,
};

export default Dropdown;
