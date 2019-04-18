import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};

  & + & {
    margin-left: 16px;
  }
`;

const Text = styled.div`
  background: rgba(0, 0, 0, 0.2);
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: normal;
  color: #ffffff;
  padding: 6px 25px;
  text-transform: uppercase;
`;

const FontColor = props => (
  <Wrapper color={props.color}>
    <Text>{props.color}</Text>
  </Wrapper>
);

FontColor.propTypes = {
  color: PropTypes.string,
};

export default FontColor;
