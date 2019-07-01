/* eslint-disable no-useless-escape */
/*
 * RegisterPage
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

import { register } from 'services/api/actions';
import { makeSelectError } from 'services/api/selectors';
import Password from 'components/Password';
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
  Action,
  RegisterButton,
  CreateAccount,
  Social,
  SocialText,
  FacebookLink,
  GoogleLink,
  InvalidEmail,
  FormError,
} from './Components';

/* eslint-disable react/prefer-stateless-function */
class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      companyName: '',
      password: '',
      invalidEmail: false,
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { email, companyName } = this.props.location.state;
      this.setState({ email, companyName });
    }
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleFullNameChange = e => {
    this.setState({ fullName: e.target.value });
  };

  handleCompanyNameChange = e => {
    this.setState({ companyName: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleRegister = () => {
    this.props.OnRegister({
      email: this.state.email,
      fullName: this.state.fullName,
      companyName: this.state.companyName,
      password: this.state.password,
    });
  };

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

  render() {
    const { error } = this.props;
    const input =
      !this.state.invalidEmail &&
      this.state.companyName &&
      this.state.fullName &&
      this.state.email &&
      this.state.password;

    return (
      <Wrapper>
        <Header>
          <Link to="/">
            <Logo src={BrandLogo} alt="Brand Logo" />
          </Link>
          <img src={HeaderMaskImg} alt="Header Mask" />
        </Header>
        <Form>
          <FormTitle>Sign Up</FormTitle>
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
              type="text"
              value={this.state.fullName}
              onChange={this.handleFullNameChange}
              id="fullName"
              className={this.state.fullName ? 'focus' : ''}
            />
            <Label htmlFor="fullName">Full Name</Label>
          </Input>
          <Input>
            <InputElement
              type="text"
              value={this.state.companyName}
              onChange={this.handleCompanyNameChange}
              id="companyName"
              className={this.state.companyName ? 'focus' : ''}
            />
            <Label htmlFor="companyName">Company Name</Label>
          </Input>
          <Password onChangePassword={this.handlePasswordChange} />
          <Action>
            <RegisterButton disabled={!input} onClick={this.handleRegister}>
              CREATE ACCOUNT
            </RegisterButton>
            <CreateAccount to="/login">Login</CreateAccount>
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

Register.propTypes = {
  OnRegister: PropTypes.func,
  location: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  OnRegister: query => dispatch(register.request(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
