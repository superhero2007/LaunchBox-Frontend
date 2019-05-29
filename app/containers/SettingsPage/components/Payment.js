/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import payment from '../../../images/payment.svg';

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

class Payment extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <img src={payment} alt="Payment" />
        <Title>Payment method has not been added yet</Title>
        <Button to="/add-payment">Add Payment Method</Button>
      </Wrapper>
    );
  }
}

export default Payment;
