import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 296px;
  height: 64px;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding: 13px 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.active {
    background: #1877f2;
    color: #fff;
    .number {
      background: #176bd8;
    }
  }

  &.prev {
    background: rgba(39, 195, 120, 0.15);
    color: #27c378;
    .number {
      background: rgba(21, 177, 102, 0.1);
    }
  }

  &.next {
    background: #e0e5f260;
    color: #1b367c80;
    .number {
      background: #c9cfdf60;
    }
  }

  & + & {
    margin-top: 16px;
  }
`;

const Number = styled.div.attrs({ className: 'number' })`
  width: 38px;
  height: 38px;
  font-weight: bold;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const titles = ['Brand Info', 'Logotype', 'Colors', 'Font', 'Social Media'];

const Sidebar = props => (
  <Wrapper>
    {titles.map((element, index) => (
      <Item
        key={element}
        className={`${props.step > index + 1 && 'prev'} ${props.step ===
          index + 1 && 'active'} ${props.step < index + 1 && 'next'}`}
        onClick={() => props.onGoTo(index + 1)}
      >
        <Number>{index + 1}</Number>
        {element}
      </Item>
    ))}
  </Wrapper>
);

Sidebar.propTypes = {
  step: PropTypes.number,
  onGoTo: PropTypes.func,
};

export default Sidebar;
