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
import { logIn } from 'services/api/actions';
import AuthBg from '../../images/auth_bg.png';
import WhiteLogo from '../../images/white-logo.svg';
import BlueLogo from '../../images/logo.svg';
import Check from '../../images/check-white.png';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const LeftWrapper = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${AuthBg});
`;

const Brand = styled.div`
  text-align: center;
`;

const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 50px;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0;
  color: white;
  margin-top: 10px;
`;

const RightWrapper = styled.div`
  height: 100%;
  width: 70%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 40px;
`;

const Logo = styled.img`
  position: absolute;
  left: 40px;
  top: 24px;
`;

const Form = styled.div`
  width: 445px;
  max-width: 100%;
`;

const Header = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 44px;
  letter-spacing: -0.03em;
  color: #424d6b;
  margin-bottom: 40px;
`;

const Input = styled.div`
  border: 2px solid rgba(66, 77, 107, 0.2);
  margin: 16px 0;
  width: 100%;
  height: 56px;
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

const ForgotWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
`;

const Remember = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  .remember-label {
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #7d8291;
    margin-left: 16px;
  }

  .remember-checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(125, 130, 144, 0.5);
  }

  &:hover {
    .remember-label {
      color: #596898;
    }

    .remember-checkbox {
      background: url(${Check}) #c0d1fc;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #c0d1fc;
    }
  }

  &.checked {
    .remember-label {
      color: #1b367c;
    }

    .remember-checkbox {
      background: url(${Check}) #1b367c;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #1b367c;
    }
  }
`;

const ForgotLink = styled(Link)`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #7d8291;
  cursor: pointer;
  border-bottom: 1px solid #d9dbe1;
  text-decoration: none;

  &:hover {
    color: #1b367c;
    border-color: #1b367c;
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginButton = styled.button`
  width: 210px;
  height: 48px;
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

const CreateAccount = styled(Link)`
  width: 210px;
  height: 48px;
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

const Social = styled.div`
  display: flex;
  margin-top: 78px;
`;

const SocialText = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: rgba(66, 77, 107, 0.5);
`;

const FacebookLink = styled(Link)`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #3b5998;
  margin-left: 47px;
  border-bottom: 2px solid #3b5998;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 0;
  }
`;

const GoogleLink = styled(Link)`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4285f4;
  margin-left: 47px;
  border-bottom: 2px solid #4285f4;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 0;
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
    return (
      <Wrapper>
        <LeftWrapper>
          <Brand>
            <img src={WhiteLogo} alt="White-Logo" />
            <SubTitle>Welcome to</SubTitle>
            <Title>Launch Box</Title>
          </Brand>
        </LeftWrapper>
        <RightWrapper>
          <Logo src={BlueLogo} alt="Logo" />
          <Form>
            <Header>Login</Header>
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
                <ForgotLink to="/">Forgot password?</ForgotLink>
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
        </RightWrapper>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  OnLogin: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    OnLogin: query => dispatch(logIn.request(query)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Login);
