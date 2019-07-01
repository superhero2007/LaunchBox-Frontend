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
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { logIn } from 'services/api/actions';
import { makeSelectError } from 'services/api/selectors';
import BrandLogo from 'images/brand_logo.svg';
import HeaderMaskImg from 'images/header_mask.svg';
import Info from 'images/info.svg';
import {
  Wrapper,
  Header,
  Logo,
  Form,
  FormTitle,
  Input,
  Label,
  InputElement,
  ForgotWrapper,
  Remember,
  ForgotLink,
  Action,
  LoginButton,
  CreateAccount,
  Social,
  SocialText,
  FacebookLink,
  GoogleLink,
  InvalidEmail,
  FormError,
} from './Components';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false,
      invalidEmail: false,
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

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleClickRemember = e => {
    e.preventDefault();
    this.setState(state => ({
      remember: !state.remember,
    }));
  };

  handleLogin = () => {
    this.props.OnLogin({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    const { error } = this.props;
    return (
      <Wrapper>
        <Header>
          <Link to="/">
            <Logo src={BrandLogo} alt="Brand Logo" />
          </Link>
          <img src={HeaderMaskImg} alt="Header Mask" />
        </Header>
        <Form>
          <FormTitle>Login</FormTitle>
          {error && (
            <FormError>
              <img src={Info} alt="Warning Info" />
              <span>{error.message}</span>
            </FormError>
          )}
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
          <Input>
            <InputElement
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              id="password"
              className={this.state.password ? 'focus' : ''}
            />
            <Label htmlFor="password">Password</Label>
          </Input>
          <ForgotWrapper>
            <Remember
              onClick={this.handleClickRemember}
              className={this.state.remember ? 'checked' : ''}
            >
              <div className="remember-checkbox" id="remember" />
              <div className="remember-label">Remember me</div>
            </Remember>
            <div>
              <ForgotLink to="/reset_password_request">
                Forgot password?
              </ForgotLink>
            </div>
          </ForgotWrapper>
          <Action>
            <LoginButton
              disabled={!this.state.email || !this.state.password}
              onClick={this.handleLogin}
            >
              LOGIN
            </LoginButton>
            <CreateAccount to="/register">Create Account</CreateAccount>
          </Action>
          <Social>
            <SocialText>Or login with</SocialText>
            <FacebookLink to="/">FACEBOOK</FacebookLink>
            <GoogleLink to="/">GOOGLE</GoogleLink>
          </Social>
        </Form>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  OnLogin: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  OnLogin: query => dispatch(logIn.request(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
