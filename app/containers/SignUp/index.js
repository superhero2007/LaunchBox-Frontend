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
import { compose } from 'redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { signUp } from 'services/api/actions';
import reducer from 'services/api/reducer';
import saga from 'services/api/saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import AuthBg from '../../images/auth_bg.png';
import WhiteLogo from '../../images/white-logo.svg';
import BlueLogo from '../../images/logo.svg';

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
  background: #3166ed;
`;

const Brand = styled.div`
  text-align: center;
  background: url(${AuthBg});
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

const SignUpButton = styled.button`
  width: 210px;
  height: 48px;
  background: #3166ed;
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
  color: #3166ed;
  text-decoration: none;

  &:hover {
    background: #3166ed;
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

/* eslint-disable react/prefer-stateless-function */
class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      companyName: '',
      password: '',
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

  handleSignUp = () => {
    this.props.OnSignUp({
      email: this.state.email,
      fullName: this.state.fullName,
      companyName: this.state.companyName,
      password: this.state.password,
    });
  };

  render() {
    const input =
      this.state.companyName &&
      this.state.fullName &&
      this.state.email &&
      this.state.password;
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
            <Header>Register</Header>
            <Input>
              <InputElement
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                id="email"
                className={this.state.email ? 'focus' : ''}
              />
              <Label htmlFor="email">Email</Label>
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
                type="text"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                id="password"
                className={this.state.password ? 'focus' : ''}
              />
              <Label htmlFor="password">Password</Label>
            </Input>
            <Action>
              <SignUpButton disabled={!input} onClick={this.handleSignUp}>
                CREATE ACCOUNT
              </SignUpButton>
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

SignUp.propTypes = {
  OnSignUp: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    OnSignUp: query => dispatch(signUp.request(query)),
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
)(SignUp);
