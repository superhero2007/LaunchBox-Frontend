import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImage from '../../images/logo.svg';
import BrandImage from '../../images/logo.png';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  padding: 2rem;
  background: white;
  display: flex;
  justify-content: space-between;
  z-index: 5;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  color: #a88d95;
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    &.origin {
      display: inline-block;
    }
    &.hover {
      display: none;
    }
  }

  img + span {
    margin-left: 15px;
  }

  & + & {
    margin-left: 4rem;
  }

  &.hide {
    display: none;
  }

  &.active,
  &:hover {
    color: #1b367c;
    img {
      &.origin {
        display: none;
      }
      &.hover {
        display: inline-block;
      }
    }
  }
`;

const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BrandTitle = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: normal;
  color: #6c4853;
  margin-left: 1rem;
  position: relative;

  &:after {
    content: '';
    right: -15px;
    top: 10px;
    position: absolute;
    border: 3px solid transparent;
    border-top-color: ${props => (props.opened ? '#58454b' : 'transparent')};
    border-left-color: ${props => (props.opened ? 'transparent' : '#58454b')};
  }
`;

const Brand = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const BlankHeader = () => (
  <Wrapper>
    <Menu>
      <MenuItem to="/">
        <img src={LogoImage} alt="Logo" />
      </MenuItem>
    </Menu>
    <BrandWrapper>
      <Brand src={BrandImage} alt="Brand" />
      <BrandTitle opened>Ketchup Creative</BrandTitle>
    </BrandWrapper>
  </Wrapper>
);

export default BlankHeader;
