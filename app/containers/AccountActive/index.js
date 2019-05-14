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
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlankHeader from 'components/BlankHeader';
import ActiveImage from '../../images/active-image.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Header = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 44px;
  letter-spacing: -0.03em;
  color: #424d6b;
  margin-top: 50px;
  padding: 0 20px;
  text-align: center;
`;

const SubHeader = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #7d8291;
  margin-top: 13px;
  padding: 0 20px;
  text-align: center;
`;

const Button = styled(Link)`
  width: 272px;
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
  margin-top: 28px;
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
        <BlankHeader />
        <img src={ActiveImage} alt="Active" />
        <Header>Your account is activated!</Header>
        <SubHeader>
          To start using the trial period, please add a payment method
        </SubHeader>
        <Button to="/add-payment">Start trial Period</Button>
      </Wrapper>
    );
  }
}

export default AccountActive;
