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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { makeSelectUser } from 'services/api/selectors';
import { getUser, updateUser, deleteUser } from 'services/api/actions';
import Header from 'components/Header';

import BrandLogo from '../../images/brand_logo.svg';
import HeaderMaskImg from '../../images/header_mask.svg';
import creditCard from '../../images/creditcard.svg';
import paypal from '../../images/paypal.svg';
import creditCardActive from '../../images/creditcard-active.svg';
import paypalActive from '../../images/paypal-active.svg';
import master from '../../images/master.svg';
import visa from '../../images/visa.svg';
import american from '../../images/american.svg';
import diners from '../../images/diners.svg';
import discover from '../../images/discover.svg';
import jcb from '../../images/jcb.svg';
import union from '../../images/union.svg';
import ExitSetings from '../../images/exit-settings.svg';

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

const BackToSettings = styled(Link)`
  position: absolute;
  top: 140px;
  left: 26px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`;

const Back = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #1b367c;
  margin-left: 20px;
`;

const PrivateHeader = styled.div`
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
  border-radius: 7px;
  overflow: hidden;
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
  border-bottom: 2px solid #dfe8ff;
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
  margin-top: 8px;
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

const ModalWrapper = styled.div`
  background: rgba(10, 19, 41, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 416px;
  height: 311px;
  background: #fff;
  border-radius: 7px;
  position: absolute;
  padding: 40px 36px;
  z-index: 1;
`;

const ModalTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #1b367c;
`;

const ModalDescription = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  margin: 28px 36px;
`;

const CancelButton = styled.button`
  width: 164px;
  height: 40px;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;

  &:hover {
    background: #1b367c;
    color: #fff;
  }
`;

const ConfirmButton = styled.button`
  width: 164px;
  height: 40px;
  background: #ec6689;
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
    color: #ec6689;
    background: #fff;
    border: 2px solid #ec6689;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class AddPayment extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dialog: false,
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

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token && !this.props.user) {
      this.props.OnGetUser();
    }
    this.updateState();
  };

  componentWillReceiveProps(newProps) {
    this.updateState(newProps);
  }

  updateState = newProps => {
    const props = newProps || this.props;
    if (props.user.paypal && props.user.paypal.email) {
      this.setState({
        paypal: props.user.paypal,
        method: true,
      });
    }
    if (props.user.creditCard && props.user.creditCard.cardNumber) {
      this.setState({
        creditCard: props.user.creditCard,
        method: false,
      });
    }
  };

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
    const { user } = this.props;
    if (
      type === 'cancel' &&
      !(user.paypal && user.paypal.email) &&
      !(user.creditCard && user.creditCard.cardNumber)
    ) {
      this.setState({ dialog: true });
      return;
    }

    if (type === 'add') {
      if (this.state.method) {
        this.props.onUpdateUser({
          paypal: this.state.paypal,
          creditCard: {
            cardNumber: '',
            holderName: '',
            expiry: '',
            cvc: '',
          },
        });
      } else {
        this.props.onUpdateUser({
          paypal: {
            email: '',
            firstName: '',
            lastName: '',
          },
          creditCard: this.state.creditCard,
        });
      }
      this.props.history.push('/active-payment');
    } else {
      this.props.history.goBack();
    }
  };

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

  handleCancelButton = () => {
    this.setState({ dialog: false });
  };

  handleConfirmButton = () => {
    this.setState({ dialog: false });
    this.props.onDeleteUser();
  };

  render() {
    const cardImage =
      this.state.creditCard && this.state.creditCard.cardNumber
        ? this.getCardType(this.state.creditCard.cardNumber)
        : '';
    const { user } = this.props;

    const modal = (
      <ModalWrapper>
        <ModalContent>
          <ModalTitle>Cancel Signup</ModalTitle>
          <ModalDescription>
            Are you sure you want to cancel your signup for Brandguide?
            <br />
            <br />
            Don’t worry, you can always come back later and finish setting up
            your account.
          </ModalDescription>
          <FormAction>
            <CancelButton onClick={this.handleCancelButton}>
              CANCEL
            </CancelButton>
            <ConfirmButton onClick={this.handleConfirmButton}>
              CONFIRM
            </ConfirmButton>
          </FormAction>
        </ModalContent>
      </ModalWrapper>
    );

    const formAction = (
      <FormAction>
        <FormCancelButton onClick={() => this.handleClick('cancel')}>
          Cancel
        </FormCancelButton>
        <FormAddButton onClick={() => this.handleClick('add')}>
          {(user.paypal && user.paypal.email) ||
          (user.creditCard && user.creditCard.cardNumber)
            ? 'Update'
            : 'Add'}
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
              {cardImage && <CardImage src={cardImage} alt="Card" />}
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

    let header;
    if (
      (user.paypal && user.paypal.email) ||
      (user.creditCard && user.creditCard.cardNumber)
    ) {
      header = (
        <Fragment>
          <Header />
          <BackToSettings to="/settings">
            <img src={ExitSetings} alt="Exit Settings" />
            <Back className="settings__exit-title">Back to Settings</Back>
          </BackToSettings>
        </Fragment>
      );
    } else {
      header = (
        <PrivateHeader>
          <Link to="/">
            <Logo src={BrandLogo} alt="Brand Logo" />
          </Link>
          <img src={HeaderMaskImg} alt="Header Mask" />
        </PrivateHeader>
      );
    }

    return (
      <Wrapper>
        {this.state.dialog && modal}
        {header}
        <Title>Add Payment Method</Title>
        <SubHeader>
          Don’t worry, we won’t charge you anything until your trial has
          expired.
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
  user: PropTypes.object,
  OnGetUser: PropTypes.func,
  onUpdateUser: PropTypes.func,
  onDeleteUser: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  OnGetUser: () => dispatch(getUser.request()),
  onUpdateUser: value => dispatch(updateUser.request(value)),
  onDeleteUser: () => dispatch(deleteUser.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPayment);
