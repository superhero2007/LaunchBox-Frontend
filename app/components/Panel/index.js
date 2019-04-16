import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import H1 from './H1';
import Description from './Description';
import Date from './Date';

const Panel = props => (
  <Wrapper
    to={props.panel.link}
    background={props.panel.background}
    className="panel"
    color={props.panel.color}
  >
    <Date>{props.panel.date}</Date>
    <H1>{props.panel.title}</H1>
    <Description>{props.panel.description}</Description>
  </Wrapper>
);

Panel.propTypes = {
  panel: PropTypes.object,
};

export default Panel;
