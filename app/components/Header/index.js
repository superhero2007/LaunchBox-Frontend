import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImage from '../../images/brand_logo.svg';
import BrandImage from '../../images/logo.png';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  padding: 2rem;
  background: rgba(49, 102, 237, 0.06);
  display: flex;
  justify-content: space-between;
  z-index: 5;
`;

const Menu = styled.div`
  display: flex;
`;

const BrandWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const BrandTitle = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
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

const Header = () => (
  <Wrapper>
    <Menu>
      <Link to="/">
        <img src={LogoImage} alt="Logo" />
      </Link>
    </Menu>
    <BrandWrapper to="settings">
      <Brand src={BrandImage} alt="Brand" />
      <BrandTitle opened>Paul Kilton</BrandTitle>
    </BrandWrapper>
  </Wrapper>
);

export default Header;
