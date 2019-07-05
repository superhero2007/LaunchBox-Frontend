import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeSelectUser } from 'services/api/selectors';
import { logOut } from 'services/api/actions';

import LogoImage from '../../images/brand_logo.svg';
import UserImage from '../../images/user.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  background: rgba(235, 239, 253);
  display: flex;
  justify-content: space-between;
  z-index: 5;
`;

const Menu = styled.div`
  display: flex;
  padding: 2rem;
`;

const BrandWrapper = styled.div`
  padding: 2rem 3rem;
  width: 240px;
  position: relative;

  &:hover {
    background: rgba(180, 192, 255, 0.1);

    .brand-content {
      display: block;
    }
  }
`;

const BrandContent = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  display: none;
  background-color: #eceffe;
  width: 240px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const BrandButton = styled.div`
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
    border-top-color: ${props => (props.opened ? '#1b367c' : 'transparent')};
    border-left-color: ${props => (props.opened ? 'transparent' : '#1b367c')};
  }
`;

const Brand = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const BrandItem = styled(Link)`
  width: 240px;
  height: 60px;
  padding: 18px 40px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #1b367c;

  &:after {
    left: 25px;
    top: 20px;
    position: absolute;
  }

  &:hover {
    background: rgba(180, 192, 255, 0.1);
    padding-left: 60px;

    &:after {
      content: '>';
    }
  }
`;

const Header = props => (
  <Wrapper>
    <Menu>
      <Link to="/">
        <img src={LogoImage} alt="Logo" />
      </Link>
    </Menu>
    {props.user && (
      <BrandWrapper>
        <BrandButton>
          <Brand
            src={
              props.user.photo
                ? `${process.env.API_ENTRY_PREFIX}${props.user.photo}`
                : UserImage
            }
            alt="Brand"
          />
          <BrandTitle opened>{props.user.fullName}</BrandTitle>
        </BrandButton>
        <BrandContent className="brand-content">
          <BrandItem to="/edit-brands">Brands</BrandItem>
          <BrandItem to="/settings">Settings</BrandItem>
          <BrandItem to="/" onClick={props.onLogOut}>
            Log Out
          </BrandItem>
        </BrandContent>
      </BrandWrapper>
    )}
  </Wrapper>
);

Header.propTypes = {
  user: PropTypes.object,
  onLogOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logOut.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
