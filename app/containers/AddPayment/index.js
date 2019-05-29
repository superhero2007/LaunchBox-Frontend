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
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BrandLogo from '../../images/brand_logo.svg';
import HeaderMaskImg from '../../images/header_mask.svg';
import creditCard from '../../images/creditcard.svg';
import paypal from '../../images/paypal.svg';
import creditCardActive from '../../images/creditcard-active.svg';
import paypalActive from '../../images/paypal-active.svg';
import card from '../../images/card.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0 20px;
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

const Title = styled.div`
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
  color: #1b367c;
  opacity: 0.5;
  margin-top: 13px;
  padding: 0 20px;
  text-align: center;
`;

const Form = styled.div`
  width: 688px;
  height: 344px;
  background: #fff;
  margin-top: 44px;
  max-width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 344px;
  height: 64px;
  cursor: pointer;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 2px solid #dfe8ff;
  color: #1b367c;

  &:hover {
    background: #dfe8ff;
  }

  &.active {
    background: #1b367c;
    color: #fff;
    border: 0;
  }

  span {
    margin-left: 13px;
  }
`;

const FormContent = styled.div`
  padding: 40px;
`;

const FormAction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormAddButton = styled.button`
  background: #1b367c;
  width: 208px;
  height: 48px;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    border: 2px solid #d6dbe9;
    background: white;
    color: #1b367c;
  }
`;

const FormCancelButton = styled.button`
  width: 208px;
  height: 48px;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: white;
  color: #1b367c;
  border: 2px solid #d6dbe9;

  &:hover {
    background: #1b367c;
    color: #fff;
  }
`;

const Input = styled.div`
  border: 2px solid rgba(66, 77, 107, 0.2);
  width: 100%;
  height: 56px;
  border-radius: 7px;
  position: relative;

  & + & {
    margin-left: 16px;
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
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #1b367c;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }
`;

const CardImage = styled.img`
  position: absolute;
  right: 17px;
  top: 17px;
`;

/* eslint-disable react/prefer-stateless-function */
class AddPayment extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      method: false,
      paypal: {
        email: '',
        firstName: '',
        lastName: '',
      },
      creditCard: {
        cardNumber: '',
        holderName: '',
        expiry: '',
        cvc: '',
      },
    };
  }

  handlePaypalEmailChange = e => {
    const { value } = e.target;
    this.setState(state => {
      const paypalObj = Object.assign({}, state.paypal);
      paypalObj.email = value;
      return {
        paypal: paypalObj,
      };
    });
  };

  handlePaypalFirstNameChange = e => {
    const { value } = e.target;
    this.setState(state => {
      const paypalObj = Object.assign({}, state.paypal);
      paypalObj.firstName = value;
      return {
        paypal: paypalObj,
      };
    });
  };

  handlePaypalLastNameChange = e => {
    const { value } = e.target;
    this.setState(state => {
      const paypalObj = Object.assign({}, state.paypal);
      paypalObj.lastName = value;
      return {
        paypal: paypalObj,
      };
    });
  };

  handleCreditCardNumberChange = e => {
    const { value } = e.target;
    this.setState(state => {
      const creditCardObj = Object.assign({}, state.creditCard);
      creditCardObj.cardNumber = value;
      return {
        creditCard: creditCardObj,
      };
    });
  };

  handleCreditCardHolderNameChange = e => {
    const { value } = e.target;
    this.setState(state => {
      const creditCardObj = Object.assign({}, state.creditCard);
      creditCardObj.holderName = value;
      return {
        creditCard: creditCardObj,
      };
    });
  };

  handleCreditCardExpiryChange = e => {
    const { value } = e.target;
    this.setState(state => {
      const creditCardObj = Object.assign({}, state.creditCard);
      creditCardObj.expiry = value;
      return {
        creditCard: creditCardObj,
      };
    });
  };

  handleCreditCardCVCChange = e => {
    const { value } = e.target;
    this.setState(state => {
      const creditCardObj = Object.assign({}, state.creditCard);
      creditCardObj.cvc = value;
      return {
        creditCard: creditCardObj,
      };
    });
  };

  toggleMethod = () => {
    this.setState(state => ({
      method: !state.method,
    }));
  };

  handleClick = type => {
    if (type === 'add') {
      console.log('Add');
    }

    if (this.props.location.state && this.props.location.state.redirect) {
      this.props.history.push(this.props.location.state.redirect);
    } else {
      this.props.history.goBack();
    }
  };

  render() {
    const formAction = (
      <FormAction>
        <FormCancelButton onClick={() => this.handleClick('cancel')}>
          Cancel
        </FormCancelButton>
        <FormAddButton onClick={() => this.handleClick('add')}>
          Add
        </FormAddButton>
      </FormAction>
    );

    let formContent;
    if (this.state.method) {
      formContent = (
        <FormContent>
          <FormRow>
            <Input>
              <InputElement
                type="text"
                value={this.state.paypal.email}
                onChange={this.handlePaypalEmailChange}
                id="paypalEmail"
                className={this.state.paypal.email ? 'focus' : ''}
              />
              <Label htmlFor="paypalEmail">Email</Label>
            </Input>
          </FormRow>
          <FormRow>
            <Input>
              <InputElement
                type="text"
                value={this.state.paypal.firstName}
                onChange={this.handlePaypalFirstNameChange}
                id="paypalFirstName"
                className={this.state.paypal.firstName ? 'focus' : ''}
              />
              <Label htmlFor="paypalFirstName">First Name</Label>
            </Input>
            <Input>
              <InputElement
                type="text"
                value={this.state.paypal.lastName}
                onChange={this.handlePaypalLastNameChange}
                id="paypalLastName"
                className={this.state.paypal.lastName ? 'focus' : ''}
              />
              <Label htmlFor="paypalLastName">Last Name</Label>
            </Input>
          </FormRow>
          <FormRow>{formAction}</FormRow>
        </FormContent>
      );
    } else {
      formContent = (
        <FormContent>
          <FormRow>
            <Input>
              <InputElement
                type="text"
                value={this.state.creditCard.cardNumber}
                onChange={this.handleCreditCardNumberChange}
                id="cardNumber"
                className={this.state.creditCard.cardNumber ? 'focus' : ''}
              />
              <Label htmlFor="cardNumber">Card Number</Label>
              <CardImage src={card} alt="Card" />
            </Input>
            <Input>
              <InputElement
                type="text"
                value={this.state.creditCard.holderName}
                onChange={this.handleCreditCardHolderNameChange}
                id="holderName"
                className={this.state.creditCard.holderName ? 'focus' : ''}
              />
              <Label htmlFor="holderName">Holder Name</Label>
            </Input>
          </FormRow>
          <FormRow>
            <Input>
              <InputElement
                type="text"
                value={this.state.creditCard.expiry}
                onChange={this.handleCreditCardExpiryChange}
                id="expiry"
                className={this.state.creditCard.expiry ? 'focus' : ''}
              />
              <Label htmlFor="expiry">Expiry</Label>
            </Input>
            <Input>
              <InputElement
                type="text"
                value={this.state.creditCard.cvc}
                onChange={this.handleCreditCardCVCChange}
                id="cvc"
                className={this.state.creditCard.cvc ? 'focus' : ''}
              />
              <Label htmlFor="cvc">CVC</Label>
            </Input>
          </FormRow>
          <FormRow>{formAction}</FormRow>
        </FormContent>
      );
    }
    const creditCardButton = this.state.method ? (
      <Button onClick={this.toggleMethod}>
        <img src={creditCard} alt="Credit Card" />
        <span>Credit card</span>
      </Button>
    ) : (
      <Button className="active" onClick={this.toggleMethod}>
        <img src={creditCardActive} alt="Credit Card" />
        <span>Credit card</span>
      </Button>
    );
    const paypalButton = this.state.method ? (
      <Button className="active" onClick={this.toggleMethod}>
        <img src={paypalActive} alt="Paypal Active" />
      </Button>
    ) : (
      <Button onClick={this.toggleMethod}>
        <img src={paypal} alt="Paypal" />
      </Button>
    );
    return (
      <Wrapper>
        <Header>
          <Link to="/">
            <Logo src={BrandLogo} alt="Brand Logo" />
          </Link>
          <img src={HeaderMaskImg} alt="Header Mask" />
        </Header>
        <Title>Add Payment Method</Title>
        <SubHeader>
          Please add a payment method to start using Launch Box
        </SubHeader>
        <Form>
          <ButtonWrapper>
            {creditCardButton}
            {paypalButton}
          </ButtonWrapper>
          {formContent}
        </Form>
      </Wrapper>
    );
  }
}

AddPayment.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default AddPayment;
