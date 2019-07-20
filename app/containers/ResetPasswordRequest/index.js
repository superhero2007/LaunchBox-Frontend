/* eslint-disable no-useless-escape */
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
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { forgotPassword } from 'services/api/actions';
import BrandLogo from 'images/brand_logo.svg';
import HeaderMaskImg from 'images/header_mask.svg';
import ResetPassword from 'images/reset-password.svg';

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
  width: 445px;
  max-width: 100%;
  margin: 20px;
`;

const FormContent = styled.div`
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

const Input = styled.div`
  border: 2px solid rgba(66, 77, 107, 0.2);
  margin: 20px 0;
  width: 100%;
  height: 56px;
  border-radius: 7px;
  position: relative;

  &.invalid {
    border-color: #f74d6c;
  }
`;

const Label = styled.label`
  position: absolute;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: rgba(66, 77, 107, 0.5);
  padding: 0 18px;
  top: 17px;
  left: 0;
  transition: top 0.2s;
  transition: font-size 0.2s;

  input:focus + &,
  input.focus + & {
    font-size: 11px;
    line-height: 14px;
    top: 10px;
  }
`;

const InputElement = styled.input`
  border: none;
  width: 100%;
  padding: 17px 18px;
  color: #424d6b;
  font-size: 15px;
  line-height: 19px;

  &:focus,
  &.focus {
    padding: 26px 18px 6px;
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
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

  &:disabled {
    background: #dfe8ff;
    color: #92aae6;
    cursor: not-allowed;
  }
`;

const LoginButton = styled(Link)`
  width: 210px;
  height: 48px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid #dfe8ff;
  color: #1b367c;
  text-decoration: none;

  &:hover {
    background: #1b367c;
    color: #fff;
    border: 0;
  }
`;

const GoToLoginButton = styled(Link)`
  width: 210px;
  height: 48px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  background: #1b367c;
  color: #fff;
  margin-top: 28px;

  &:hover {
    color: #1b367c;
    background: #fff;
    border: 1px solid #1b367c;
  }
`;

const InvalidEmail = styled.div`
  position: absolute;
  right: 21px;
  top: 19px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  text-align: right;
  color: #f64d6c;
`;

/* eslint-disable react/prefer-stateless-function */
class ResetPasswordRequest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      invalidEmail: false,
      sent: false,
    };
  }

  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      return true;
    }
    return re.test(String(email).toLowerCase());
  };

  handleEmailFocus = () => {
    this.setState({ invalidEmail: false });
  };

  handleEmailBlur = () => {
    this.setState(state => ({
      invalidEmail: !this.validateEmail(state.email),
    }));
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleForgotPassword = () => {
    this.props.OnForgotPassword(this.state.email);
    this.setState({ sent: true });
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
        {this.state.sent ? (
          <FormContent>
            <img src={ResetPassword} alt="Reset Password" />
            <FormTitle>Email Sent</FormTitle>
            <SubHeader>
              An email with instructions on how to reset your password was sent
              to &nbsp;
              {this.state.email}
            </SubHeader>
            <Action>
              <GoToLoginButton to="/login">LOGIN</GoToLoginButton>
            </Action>
          </FormContent>
        ) : (
          <Form>
            <FormTitle>Forgot password</FormTitle>
            <SubHeader>Please enter the email you used to register.</SubHeader>
            <Input className={this.state.invalidEmail ? 'invalid' : ''}>
              <InputElement
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                id="email"
                className={this.state.email ? 'focus' : ''}
                onFocus={this.handleEmailFocus}
                onBlur={this.handleEmailBlur}
              />
              <Label htmlFor="email">Email</Label>
              {this.state.invalidEmail && (
                <InvalidEmail>Invalid Address</InvalidEmail>
              )}
            </Input>
            <Action>
              <SubmitButton
                disabled={!this.state.email || this.state.invalidEmail}
                onClick={this.handleForgotPassword}
              >
                SUBMIT
              </SubmitButton>
              <LoginButton to="/login">LOGIN</LoginButton>
            </Action>
          </Form>
        )}
      </Wrapper>
    );
  }
}

ResetPasswordRequest.propTypes = {
  OnForgotPassword: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    OnForgotPassword: query => dispatch(forgotPassword.request(query)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(ResetPasswordRequest);
