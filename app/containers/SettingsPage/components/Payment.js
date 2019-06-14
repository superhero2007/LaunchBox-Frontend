/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import payment from '../../../images/payment.svg';

import paypal from '../../../images/paypal.svg';
import master from '../../../images/master.svg';
import visa from '../../../images/visa.svg';
import american from '../../../images/american.svg';
import diners from '../../../images/diners.svg';
import discover from '../../../images/discover.svg';
import jcb from '../../../images/jcb.svg';
import union from '../../../images/union.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 320px;
  background: #fff;
  overflow: hidden;
  border-radius: 7px;
  position: relative;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #1b367c;
  margin-top: 28px;
`;

const Button = styled(Link)`
  border: 2px solid #dfe8ff;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #3166ed;
  border-radius: 7px;
  width: 242px;
  height: 48px;
  margin-top: 28px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #3166ed;
    color: #fff;
    border: 0;
  }
`;

const CardContent = styled.div`
  text-align: left;
  width: 100%;
  padding: 40px;
`;

const CardImage = styled.img`
  height: 25px;
  margin-bottom: 30px;
`;

const SubTitle = styled.div`
  margin-top: 17px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #1b367c;
  opacity: 0.5;
`;

const CardName = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.size}px;
  line-height: ${props => props.height}px;
  color: #1b367c;
`;

const CardAction = styled.div`
  position: absolute;
  top: 0;
  right: 56px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChangeMethod = styled(Link)`
  width: 200px;
  height: 48px;
  border: 2px solid #dfe8ff;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #3166ed;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: #3166ed;
  }
`;

class Payment extends React.PureComponent {
  getCardType = number => {
    // visa
    let re = new RegExp('^4');
    if (number.match(re) != null) {
      return visa;
    }

    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
    if (
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
        number,
      )
    ) {
      return master;
    }

    // AMEX
    re = new RegExp('^3[47]');
    if (number.match(re) != null) {
      return american;
    }

    // Discover
    re = new RegExp(
      '^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)',
    );
    if (number.match(re) != null) {
      return discover;
    }

    // Diners
    re = new RegExp('^36');
    if (number.match(re) != null) {
      return diners;
    }

    // Diners - Carte Blanche
    re = new RegExp('^30[0-5]');
    if (number.match(re) != null) {
      return diners;
    }

    // JCB
    re = new RegExp('^35(2[89]|[3-8][0-9])');
    if (number.match(re) != null) {
      return jcb;
    }

    // Visa Electron
    re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
    if (number.match(re) != null) {
      return visa;
    }

    // China Union
    re = new RegExp('^62');
    if (number.match(re) != null) {
      return union;
    }

    return '';
  };

  render() {
    const { user } = this.props;
    if (user.creditCard && user.creditCard.cardNumber) {
      const cardType = this.getCardType(user.creditCard.cardNumber);
      return (
        <Wrapper>
          <CardContent>
            {cardType && <CardImage src={cardType} alt="Card Image" />}
            <SubTitle>Card Holder</SubTitle>
            <CardName size={17} height={21}>
              {user.creditCard.holderName}
            </CardName>
            <SubTitle>Card Number</SubTitle>
            <CardName size={21} height={26}>
              {`**** **** **** ${user.creditCard.cardNumber.substr(
                user.creditCard.cardNumber.length - 4,
              )}`}
            </CardName>
            <SubTitle>Expiry</SubTitle>
            <CardName size={15} height={19}>
              {user.creditCard.expiry}
            </CardName>
          </CardContent>
          <CardAction>
            <ChangeMethod to="/add-payment">Change Method</ChangeMethod>
          </CardAction>
        </Wrapper>
      );
    }

    if (user.paypal && user.paypal.email) {
      return (
        <Wrapper>
          <CardContent>
            <CardImage src={paypal} alt="Card Image" />
            <SubTitle>Name</SubTitle>
            <CardName size={17} height={21}>
              {`${user.paypal.firstName} ${user.paypal.lastName}`}
            </CardName>
            <SubTitle>Email</SubTitle>
            <CardName size={21} height={26}>
              {`********${user.paypal.email.substr(
                user.paypal.email.length - 10,
              )}`}
            </CardName>
          </CardContent>
          <CardAction>
            <ChangeMethod to="/add-payment">Change Method</ChangeMethod>
          </CardAction>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <img src={payment} alt="Payment" />
        <Title>Payment method has not been added yet</Title>
        <Button to="/add-payment">Add Payment Method</Button>
      </Wrapper>
    );
  }
}

Payment.propTypes = {
  user: PropTypes.object,
};

export default Payment;
