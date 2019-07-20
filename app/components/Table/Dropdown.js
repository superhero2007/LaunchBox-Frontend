import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThreeDot from 'images/three_dot.png';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  border: none;
  cursor: pointer;
`;

const DropdownButtonSpan = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: normal;
  text-align: right;
  color: ${props => props.color};
  margin-right: 1rem;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 150px;
  z-index: 1;
  right: 0;
  padding: 10px 0;

  .dropdown:hover & {
    display: block;
  }
`;

const DropdownElement = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
  color: #58454b;
  padding: 10px 23px;
  display: block;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f0edee;
  }
`;

const Dropdown = props => (
  <Wrapper className="dropdown">
    <DropdownButton>
      <DropdownButtonSpan color={props.color}>{props.value}</DropdownButtonSpan>
      <img src={ThreeDot} alt="Dropdown Button" />
    </DropdownButton>
    <DropdownContent>
      <DropdownElement>Duplicate</DropdownElement>
      <DropdownElement onClick={props.onDelete}>Delete</DropdownElement>
    </DropdownContent>
  </Wrapper>
);

Dropdown.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Dropdown;
