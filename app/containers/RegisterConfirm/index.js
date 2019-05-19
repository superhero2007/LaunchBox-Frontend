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
import { registerEmail } from 'services/api/actions';
import AuthBg from '../../images/auth_bg.png';
import WhiteLogo from '../../images/white-logo.svg';
import BlueLogo from '../../images/logo.svg';
import ConfirmImage from '../../images/confirm-image.svg';

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
  margin-top: 64px;
`;

const SubHeader = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #7d8291;
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
            <img src={ConfirmImage} alt="Registration Confirm" />
            <Header>Congratulations on your successful registration</Header>
            <SubHeader>
              Please confirm your account by clicking on the link sent to your
              email
            </SubHeader>
            <Action>
              <RegisterButton onClick={this.handleRegisterEmail}>
                RESEND
              </RegisterButton>
            </Action>
          </Form>
        </RightWrapper>
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
