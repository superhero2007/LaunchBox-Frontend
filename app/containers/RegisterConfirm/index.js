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
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { registerEmail } from 'services/api/actions';
import BrandLogo from 'images/brand_logo.svg';
import HeaderMaskImg from 'images/header_mask.svg';
import ConfirmImage from 'images/confirm-image.svg';

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
  margin-top: 64px;
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

const RegisterButton = styled.button`
  width: 210px;
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
`;

/* eslint-disable react/prefer-stateless-function */
class RegisterConfirm extends React.PureComponent {
  handleRegisterEmail = () => {
    this.props.OnSendEmail({});
  };

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
          <img src={ConfirmImage} alt="Registration Confirm" />
          <FormTitle>Success!</FormTitle>
          <SubHeader>
            We just sent you an email. Please click on the link to verify your
            account.
          </SubHeader>
          <Action>
            <RegisterButton onClick={this.handleRegisterEmail}>
              RESEND
            </RegisterButton>
          </Action>
        </Form>
      </Wrapper>
    );
  }
}

RegisterConfirm.propTypes = {
  OnSendEmail: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    OnSendEmail: query => dispatch(registerEmail.request(query)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(RegisterConfirm);
