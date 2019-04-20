import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Wrapper from './Wrapper';
import Title from './Title';

const SubHeader = props => (
  <Wrapper>
    <Title opened={props.opened} onClick={props.toggle}>
      {props.title}
    </Title>
    <Dropdown value={props.value} color={props.color} />
  </Wrapper>
);

SubHeader.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  opened: PropTypes.bool,
  color: PropTypes.string,
  toggle: PropTypes.func,
};

export default SubHeader;
