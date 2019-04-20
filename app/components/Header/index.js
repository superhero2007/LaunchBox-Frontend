import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImage from '../../images/logo.svg';
import BrandImage from '../../images/logo.png';
import BizBoxIcon from '../../images/bizbox-icon.svg';
import BrandBoxIcon from '../../images/brandbox-icon.svg';
import ToolBoxIcon from '../../images/toolbox-icon.svg';

import BizBoxIconHover from '../../images/bizbox-icon__hover.svg';
import BrandBoxIconHover from '../../images/brandbox-icon__hover.svg';
import ToolBoxIconHover from '../../images/toolbox-icon__hover.svg';

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
    color: #3166ed;
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

const MenuItemText = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
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

const Header = props => (
  <Wrapper>
    <Menu>
      <MenuItem to="/">
        <img src={LogoImage} alt="Logo" />
      </MenuItem>
      <MenuItem
        to="/biz"
        className={
          (props.route === '/biz' ? 'active' : '') +
          (props.route === '/' ? 'hide' : '')
        }
      >
        <img src={BizBoxIcon} alt="BizBox" className="origin" />
        <img src={BizBoxIconHover} alt="BizBox" className="hover" />
        <MenuItemText>BizBox</MenuItemText>
      </MenuItem>

      <MenuItem
        to="/brand"
        className={
          (props.route === '/brand' ? 'active' : '') +
          (props.route === '/' ? 'hide' : '')
        }
      >
        <img src={BrandBoxIcon} alt="BrandBox" className="origin" />
        <img src={BrandBoxIconHover} alt="BizBox" className="hover" />
        <MenuItemText>BrandBox</MenuItemText>
      </MenuItem>
      <MenuItem
        to="/"
        className={
          (props.route === '/tool' ? 'active' : '') +
          (props.route === '/' ? 'hide' : '')
        }
      >
        <img src={ToolBoxIcon} alt="ToolBox" className="origin" />
        <img src={ToolBoxIconHover} alt="ToolBox" className="hover" />
        <MenuItemText>ToolBox</MenuItemText>
      </MenuItem>
    </Menu>
    <BrandWrapper>
      <Brand src={BrandImage} alt="Brand" />
      <BrandTitle opened>Ketchup Creative</BrandTitle>
    </BrandWrapper>
  </Wrapper>
);

Header.propTypes = {
  route: PropTypes.string,
};

export default Header;
