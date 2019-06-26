import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeSelectUser } from 'services/api/selectors';

import LogoImage from '../../images/brand_logo.svg';
import UserImage from '../../images/user.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  padding: 2rem;
  background: rgba(235, 239, 253);
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

const Header = props => (
  <Wrapper>
    <Menu>
      <Link to="/">
        <img src={LogoImage} alt="Logo" />
      </Link>
    </Menu>
    {props.user && (
      <BrandWrapper to="/settings">
        <Brand
          src={
            props.user.photo
              ? `${process.env.API_ENTRY_PREFIX}${props.user.photo}`
              : UserImage
          }
          alt="Brand"
        />
        <BrandTitle opened>{props.user.fullName}</BrandTitle>
      </BrandWrapper>
    )}
  </Wrapper>
);

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

export default connect(
  mapStateToProps,
  null,
)(Header);
