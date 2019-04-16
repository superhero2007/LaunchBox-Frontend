import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Wrapper from './Wrapper';
import Title from './Title';
import Add from './Add';

const SubHeader = props => (
  <Wrapper>
    {!props.new && <Title opened={props.opened}>{props.title}</Title>}
    {!props.new && <Dropdown value={props.value} color={props.color} />}
    {props.new && <Add>Add category</Add>}
  </Wrapper>
);

SubHeader.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  opened: PropTypes.bool,
  color: PropTypes.string,
  new: PropTypes.bool,
};

export default SubHeader;
