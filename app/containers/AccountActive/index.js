/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectUser } from 'services/api/selectors';

import BrandLogo from 'images/brand_logo.svg';
import HeaderMaskImg from 'images/header_mask.svg';
import ActiveImage from 'images/active-image.svg';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.img`
  position: absolute;
  left: 43px;
  top: 34px;
`;

const Form = styled.div`
  max-width: 100%;
  margin: 20px;
`;

const FormTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 44px;
  letter-spacing: -0.03em;
  color: #1b367c;
  margin-top: 45px;
`;

const SubHeader = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  opacity: 0.5;
  margin-top: 13px;
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`;

const Button = styled(Link)`
  width: 272px;
  height: 48px;
  border-radius: 7px;
  background: #1b367c;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable react/prefer-stateless-function */
class AccountActive extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Header>
          <Link to="/">
            <Logo src={BrandLogo} alt="Brand Logo" />
          </Link>
          <img src={HeaderMaskImg} alt="Header Mask" />
        </Header>
        <Form>
          <img src={ActiveImage} alt="Registration Confirm" />
          <FormTitle>Account Verified!</FormTitle>
          <SubHeader>
            Please add a payment method before starting your 7-day free trial.
          </SubHeader>
          <Action>
            {this.props.user.role === 'Admin' ? (
              <Button to="/add-payment">ADD PAYMENT METHOD</Button>
            ) : (
              <Button to="/home">LAUNCH BRANDGUIDE</Button>
            )}
          </Action>
        </Form>
      </Wrapper>
    );
  }
}

AccountActive.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

export default connect(mapStateToProps)(AccountActive);
