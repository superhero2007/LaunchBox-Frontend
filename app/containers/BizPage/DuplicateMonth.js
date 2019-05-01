import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: #6c4853;
  position: relative;
  margin-left: 22px;

  &:hover {
    background: #3166ed;
    color: white;
  }
`;

const Plus = styled.div`
  font-size: 40px;
`;

const Text = styled.div`
  position: absolute;
  top: 160px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
`;

const DuplicateMonth = props => (
  <Wrapper onClick={props.onClick}>
    <Plus>+</Plus>
    <Text>Duplicate Last Month</Text>
  </Wrapper>
);
DuplicateMonth.propTypes = {
  onClick: PropTypes.func,
};

export default DuplicateMonth;
