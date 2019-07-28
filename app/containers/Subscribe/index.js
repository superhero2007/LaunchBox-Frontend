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
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectCompany } from 'services/api/selectors';
import { createSubscribe, updateSubscribe } from 'services/api/actions';
import Header from 'components/Header';

import PaymentAdded from 'images/payment-added.svg';
import ExitSetings from 'images/exit-settings.svg';

import {
  Wrapper,
  BackToSettings,
  Back,
  Form,
  SuccessForm,
  ConfirmForm,
  ConfirmSubHeader,
  SuccessImg,
  FormTitle,
  SubHeader,
  Action,
  FormButton,
  FormContent,
  FormAction,
  ConfirmBackButton,
  ConfirmSubmitButton,
  FormAddButton,
  FormCancelButton,
  FormRow,
  FormRowContent,
  Type,
  Price,
  SubTitle,
  Additional,
  AdditionalTitle,
  AdditionalContent,
  AdditionalValue,
  AdditionalButton,
  Description,
  CancelSubscription,
} from './component';

/* eslint-disable react/prefer-stateless-function */
class Subscribe extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      confirm: false,
      method: false,
      users: 0,
      brands: 0,
      success: false,
    };
  }

  componentDidMount = () => {
    this.updateState();
  };

  componentWillReceiveProps(newProps) {
    this.updateState(newProps);
  }

  updateState = newProps => {
    const props = newProps || this.props;
    const { subscription } = props.company;
    if (subscription) {
      this.setState({
        users: parseInt(subscription.users, 10),
        brands: parseInt(subscription.brands, 10),
        method: subscription.method,
      });
    }
  };

  handleUsersChange = value => {
    if (value < 0) {
      return;
    }
    this.setState({ users: value });
  };

  handleBrandsChange = value => {
    if (value < 0) {
      return;
    }
    this.setState({ brands: value });
  };

  toggleMethod = () => {
    this.setState(state => ({
      method: !state.method,
    }));
  };

  handleClickConfirm = () => {
    const { method, users, brands } = this.state;
    const { company, onCreateSubscribe, onUpdateSubscribe } = this.props;
    const paymentMethod = company.subscription
      ? onUpdateSubscribe
      : onCreateSubscribe;
    const amount = method
      ? 9 + users * 4 + brands * 6
      : 12 + users * 6 + brands * 9;
    paymentMethod({
      subscription: {
        amount,
        method,
        users,
        brands,
        status: 1,
        date: new Date(),
      },
    });
    this.setState({ success: true });
  };

  handleClickCancel = () => {
    this.props.history.goBack();
  };

  handleToggleConfirm = () => {
    this.setState(state => ({
      confirm: !state.confirm,
    }));
  };

  handleCancelSubscription = () => {
    const { onUpdateSubscribe } = this.props;
    onUpdateSubscribe({
      subscription: {
        amount: 0,
        method: false,
        users: 0,
        brands: 0,
        status: 2,
        date: new Date(),
      },
    });
    this.props.history.push('/settings');
  };

  render() {
    const { method, users, brands, success, confirm } = this.state;
    const { company } = this.props;

    if (confirm) {
      const subscriptionDate = new Date(company.subscription.date);
      return (
        <Wrapper>
          <Header />
          <BackToSettings to="/settings">
            <img src={ExitSetings} alt="Exit Settings" />
            <Back className="settings__exit-title">Back to Settings</Back>
          </BackToSettings>
          <ConfirmForm>
            <FormTitle>
              Are you sure you want to cancel your monthly Brandguide
              subscription?
            </FormTitle>
            <ConfirmSubHeader>
              Subscription will still be valid until&nbsp;
              {subscriptionDate
                .toDateString()
                .split(' ')
                .slice(1)
                .join(' ')}
            </ConfirmSubHeader>
            <FormAction>
              <ConfirmBackButton onClick={this.handleToggleConfirm}>
                BACK
              </ConfirmBackButton>
              <ConfirmSubmitButton onClick={this.handleCancelSubscription}>
                SUBMIT
              </ConfirmSubmitButton>
            </FormAction>
          </ConfirmForm>
        </Wrapper>
      );
    }

    if (success) {
      return (
        <Wrapper>
          <Header />
          <BackToSettings to="/settings">
            <img src={ExitSetings} alt="Exit Settings" />
            <Back className="settings__exit-title">Back to Settings</Back>
          </BackToSettings>
          <SuccessForm>
            <SuccessImg src={PaymentAdded} alt="Registration Confirm" />
            <FormTitle>Subscription Successfully Updated</FormTitle>
            <SubHeader>Now, let’s get back to work!</SubHeader>
            <Action>
              <FormButton to="/home">GO TO BRAND PAGE</FormButton>
            </Action>
          </SuccessForm>
        </Wrapper>
      );
    }

    const amount = method
      ? 9 + users * 4 + brands * 6
      : 12 + users * 6 + brands * 9;

    const formAction = (
      <FormAction>
        <FormCancelButton onClick={this.handleClickCancel}>
          Cancel
        </FormCancelButton>
        <FormAddButton onClick={this.handleClickConfirm}>
          Confirm ($
          {amount})
        </FormAddButton>
      </FormAction>
    );

    let formContent;
    if (!method) {
      formContent = (
        <FormContent>
          <FormRow>
            <Type>Monthly Subscription</Type>
          </FormRow>
          <FormRow>
            <FormRowContent>
              <Price>${amount}</Price>
              <SubTitle>per month</SubTitle>
            </FormRowContent>
          </FormRow>
          <FormRow>
            <Additional>
              <AdditionalTitle>
                ADDITIONAL BRANDS (TOTAL ${9 * brands})
              </AdditionalTitle>
              <AdditionalContent>
                <AdditionalValue>{brands}</AdditionalValue>
                <AdditionalButton
                  type="plus"
                  onClick={() => this.handleBrandsChange(brands + 1)}
                >
                  +
                </AdditionalButton>
                <AdditionalButton
                  type="minus"
                  onClick={() => this.handleBrandsChange(brands - 1)}
                >
                  -
                </AdditionalButton>
              </AdditionalContent>
            </Additional>
            <Additional>
              <AdditionalTitle>
                ADDITIONAL USERS (TOTAL ${6 * users})
              </AdditionalTitle>
              <AdditionalContent>
                <AdditionalValue>{users}</AdditionalValue>
                <AdditionalButton
                  type="plus"
                  onClick={() => this.handleUsersChange(users + 1)}
                >
                  +
                </AdditionalButton>
                <AdditionalButton
                  type="minus"
                  onClick={() => this.handleUsersChange(users - 1)}
                >
                  -
                </AdditionalButton>
              </AdditionalContent>
            </Additional>
          </FormRow>
          <FormRow>{formAction}</FormRow>
          <FormRow>
            <Description>
              Monthly subscription starts at $12 and includes 1 Brand and 3
              Users.&nbsp;
              {company.subscription ? (
                <CancelSubscription onClick={this.handleCancelSubscription}>
                  Cancel Subscription
                </CancelSubscription>
              ) : (
                'You can add more later.'
              )}
            </Description>
          </FormRow>
        </FormContent>
      );
    } else {
      formContent = (
        <FormContent>
          <FormRow>
            <Type>Annual Subscription</Type>
          </FormRow>
          <FormRow>
            <FormRowContent opacity>
              <Price>${amount}</Price>
              <SubTitle>per month</SubTitle>
            </FormRowContent>
            <FormRowContent>
              <Price>${amount * 12}</Price>
              <SubTitle>per year</SubTitle>
            </FormRowContent>
          </FormRow>
          <FormRow>
            <Additional>
              <AdditionalTitle>
                ADDITIONAL BRANDS (TOTAL ${6 * brands})
              </AdditionalTitle>
              <AdditionalContent>
                <AdditionalValue>{brands}</AdditionalValue>
                <AdditionalButton
                  type="plus"
                  onClick={() => this.handleBrandsChange(brands + 1)}
                >
                  +
                </AdditionalButton>
                <AdditionalButton
                  type="minus"
                  onClick={() => this.handleBrandsChange(brands - 1)}
                >
                  -
                </AdditionalButton>
              </AdditionalContent>
            </Additional>
            <Additional>
              <AdditionalTitle>
                ADDITIONAL USERS (TOTAL ${4 * users})
              </AdditionalTitle>
              <AdditionalContent>
                <AdditionalValue>{users}</AdditionalValue>
                <AdditionalButton
                  type="plus"
                  onClick={() => this.handleUsersChange(users + 1)}
                >
                  +
                </AdditionalButton>
                <AdditionalButton
                  type="minus"
                  onClick={() => this.handleUsersChange(users - 1)}
                >
                  -
                </AdditionalButton>
              </AdditionalContent>
            </Additional>
          </FormRow>
          <FormRow>{formAction}</FormRow>
          <FormRow>
            <Description>
              Annual subscription starts at $9 and includes 1 Brand and 3
              Users.&nbsp;
              {company.subscription ? (
                <CancelSubscription onClick={this.handleCancelSubscription}>
                  Cancel Subscription
                </CancelSubscription>
              ) : (
                'You can add more later.'
              )}
            </Description>
          </FormRow>
        </FormContent>
      );
    }
    // const monthlyButton = (
    //   <Button
    //     className={!this.state.method && 'active'}
    //     onClick={this.toggleMethod}
    //   >
    //     MONTHLY
    //   </Button>
    // );
    // const annuallyButton = (
    //   <Button
    //     className={this.state.method && 'active'}
    //     onClick={this.toggleMethod}
    //   >
    //     ANNUALLY
    //   </Button>
    // );

    return (
      <Wrapper>
        <Header />
        <BackToSettings to="/settings">
          <img src={ExitSetings} alt="Exit Settings" />
          <Back className="settings__exit-title">Back to Settings</Back>
        </BackToSettings>
        <Form>
          {/*
          <ButtonWrapper>
            {monthlyButton}
            {annuallyButton}
          </ButtonWrapper>
         */}
          {formContent}
        </Form>
      </Wrapper>
    );
  }
}

Subscribe.propTypes = {
  company: PropTypes.object,
  onCreateSubscribe: PropTypes.func,
  onUpdateSubscribe: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
});

const mapDispatchToProps = dispatch => ({
  onCreateSubscribe: value => dispatch(createSubscribe.request(value)),
  onUpdateSubscribe: value => dispatch(updateSubscribe.request(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);
