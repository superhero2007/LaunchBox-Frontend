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
import { compose } from 'redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { register } from 'services/api/actions';
import reducer from 'services/api/reducer';
import saga from 'services/api/saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import AuthBg from '../../images/auth_bg.png';
import WhiteLogo from '../../images/white-logo.svg';
import BlueLogo from '../../images/logo.svg';
import PasswordText from '../../images/password-text.svg';
import PasswordTextHover from '../../images/password-text__hover.svg';
import PasswordHash from '../../images/password-hash.svg';
import PasswordHashHover from '../../images/password-hash__hover.svg';
import PasswordHint from '../../images/password-hint.svg';
import PasswordHintHover from '../../images/password-hint__hover.svg';

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

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const RegisterButton = styled.button`
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

const PasswordHintImg = styled.img`
  position: absolute;
  top: 17px;
  right: 57px;
  width: 20px;
  height: 20px;
`;

const PasswordIconImg = styled.img`
  position: absolute;
  top: 17px;
  right: 17px;
  width: 20px;
  height: 20px;
`;

const PasswordParam = styled.div`
  position: absolute;
  top: 17px;
  right: -60px;
  color: ${props => props.color};
`;

const PasswordLength = styled.div`
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  display: flex;
`;

const PasswordLengthElement = styled.div`
  background: ${props => props.color};
  width: 100%;

  & + & {
    margin-left: 12px;
  }
`;

const PasswordHintTooltip = styled.div`
  position: absolute;
  top: -75px;
  left: 340px;
  width: 285px;
  height: 83px;
`;

const PasswordHintTooltipContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 17px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #424d6b;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09);
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;

    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
    bottom: -8px;
    left: 25px;
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
class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      companyName: '',
      password: '',
      showPassword: false,
      passwordHover: false,
      passwordHoverHint: false,
      invalidEmail: false,
    };
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

  togglePassword = () => {
    this.setState(state => ({
      showPassword: !state.showPassword,
    }));
  };

  hoverInPassword = () => {
    this.setState({ passwordHover: true });
  };

  hoverOutPassword = () => {
    this.setState({ passwordHover: false });
  };

  hoverInPasswordHint = () => {
    this.setState({ passwordHoverHint: true });
  };

  hoverOutPasswordHint = () => {
    this.setState({ passwordHoverHint: false });
  };

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

  render() {
    const input =
      this.state.companyName &&
      this.state.fullName &&
      this.state.email &&
      this.state.password;

    let passwordIcon;
    if (this.state.showPassword) {
      if (this.state.passwordHover) {
        passwordIcon = PasswordTextHover;
      } else {
        passwordIcon = PasswordText;
      }
    } else if (this.state.passwordHover) {
      passwordIcon = PasswordHashHover;
    } else {
      passwordIcon = PasswordHash;
    }

    let passwordHintIcon;
    if (this.state.passwordHoverHint) {
      passwordHintIcon = PasswordHintHover;
    } else {
      passwordHintIcon = PasswordHint;
    }

    let passwordParam = {
      text: '',
      color: '#fff',
      weak: ['transparent', 'transparent', 'transparent', 'transparent'],
    };
    const passwordWeakLength = [
      {
        text: 'Worst',
        color: '#B3B8C4',
        weak: ['#D9DBE1', '#D9DBE1', '#D9DBE1', '#D9DBE1'],
      },
      {
        text: 'Bad',
        color: '#E37898',
        weak: ['#E37898', '#D9DBE1', '#D9DBE1', '#D9DBE1'],
      },
      {
        text: 'Weak',
        color: '#FEB765',
        weak: ['#FEB765', '#FEB765', '#D9DBE1', '#D9DBE1'],
      },
      {
        text: 'Good',
        color: '#0BDF6D',
        weak: ['#0BDF6D', '#0BDF6D', '#0BDF6D', '#D9DBE1'],
      },
      {
        text: 'Strong',
        color: '#0BDF6D',
        weak: ['#0BDF6D', '#0BDF6D', '#0BDF6D', '#0BDF6D'],
      },
    ];

    if (this.state.password) {
      const passwordWeak = Math.floor(this.state.password.length / 4);
      if (passwordWeak >= 5) {
        passwordParam = {
          text: 'Strong',
          color: '#0BDF6D',
          weak: ['#0BDF6D', '#0BDF6D', '#0BDF6D', '#0BDF6D'],
        };
      } else {
        passwordParam = passwordWeakLength[passwordWeak];
      }
    }

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
            <Header>Sign Up</Header>
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
            <Input>
              <InputElement
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handlePasswordChange}
                id="password"
                className={this.state.password ? 'focus' : ''}
              />
              <Label htmlFor="password">Password</Label>
              <PasswordHintImg
                src={passwordHintIcon}
                alt="Password Hint"
                onMouseEnter={this.hoverInPasswordHint}
                onMouseLeave={this.hoverOutPasswordHint}
              />
              <PasswordIconImg
                src={passwordIcon}
                alt="Password Text"
                onClick={this.togglePassword}
                onMouseEnter={this.hoverInPassword}
                onMouseLeave={this.hoverOutPassword}
              />
              <PasswordParam color={passwordParam.color}>
                {passwordParam.text}
              </PasswordParam>
              <PasswordLength>
                <PasswordLengthElement color={passwordParam.weak[0]} />
                <PasswordLengthElement color={passwordParam.weak[1]} />
                <PasswordLengthElement color={passwordParam.weak[2]} />
                <PasswordLengthElement color={passwordParam.weak[3]} />
              </PasswordLength>
              {this.state.passwordHoverHint && (
                <PasswordHintTooltip>
                  <PasswordHintTooltipContent>
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </PasswordHintTooltipContent>
                </PasswordHintTooltip>
              )}
            </Input>
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
        </RightWrapper>
      </Wrapper>
    );
  }
}

Register.propTypes = {
  OnRegister: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    OnRegister: query => dispatch(register.request(query)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'service', reducer });
const withSaga = injectSaga({ key: 'service', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Register);
