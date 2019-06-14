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
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { makeSelectUser } from 'services/api/selectors';
import { getUser, updateUser } from 'services/api/actions';

import BrandLogo from '../../images/brand_logo.svg';
import HeaderMaskImg from '../../images/header_mask.svg';

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

const Form = styled.div`
  width: 688px;
  height: 558px;
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
  width: 288px;
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
  width: 288px;
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

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }
`;

const FormRowContent = styled.div`
  ${props => props.opacity && 'opacity: 0.5;'};
  width: 100%;
  text-align: center;

  & + & {
    border-left: 1px solid rgba(27, 54, 124, 0.1);
  }
`;

const Type = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #1b367c;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 47px;
  line-height: 59px;
  text-align: center;
  color: #1b367c;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  opacity: 0.5;
`;

const Additional = styled.div`
  width: 50%;
  margin: 24px 0 44px;

  & + & {
    margin-left: 26px;
  }
`;

const AdditionalTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(27, 54, 124, 0.5);
  border-radius: 7px;
`;

const AdditionalContent = styled.div`
  width: 100%;
  height: 56px;
  background: #f8f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 7px;
  margin-top: 12px;
  border: 2px solid #f8f8ff;

  &:hover {
    border: 2px solid #d6dbe9;
    background: #fff;
  }
`;

const AdditionalValue = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  color: #1b367c;
  border-radius: 7px;
`;

const AdditionalButton = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 18px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => (props.type === 'minus' ? 'left: 20px;' : 'right: 20px;')};
  color: #1b367c;
  cursor: pointer;

  &:hover {
    color: #3166ed;
  }
`;

const Description = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #1b367c;
  opacity: 0.5;
  border-radius: 7px;
  margin-top: 38px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CancelSubscription = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

/* eslint-disable react/prefer-stateless-function */
class Subscribe extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      method: false,
      users: 0,
      brands: 0,
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
    this.setState({
      users: parseInt(props.user.subscription.users, 10),
      brands: parseInt(props.user.subscription.brands, 10),
    });
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

  handleClick = type => {
    if (type === 'add') {
      const { method, users, brands } = this.state;
      const amount = method
        ? 12 + users * 6 + brands * 9
        : 9 + users * 4 + brands * 6;
      this.props.onUpdateUser({
        amount,
        method,
        users,
        brands,
      });
    }

    this.props.history.goBack();
  };

  render() {
    const { method, users, brands } = this.state;
    const { user } = this.props;
    const amount = method
      ? 12 + users * 6 + brands * 9
      : 9 + users * 4 + brands * 6;

    const formAction = (
      <FormAction>
        <FormCancelButton onClick={() => this.handleClick('cancel')}>
          Cancel
        </FormCancelButton>
        <FormAddButton onClick={() => this.handleClick('add')}>
          Confirm ($
          {amount})
        </FormAddButton>
      </FormAction>
    );

    let formContent;
    if (!this.state.method) {
      formContent = (
        <FormContent>
          <FormRow>
            <Type>Monthly Subscription</Type>
          </FormRow>
          <FormRow>
            <FormRowContent>
              <Price>{amount}</Price>
              <SubTitle>per month</SubTitle>
            </FormRowContent>
          </FormRow>
          <FormRow>
            <Additional>
              <AdditionalTitle>
                ADDITIONAL BRANDS (TOTAL ${9 * brands})
              </AdditionalTitle>
              <AdditionalContent>
                <AdditionalValue>7</AdditionalValue>
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
                <AdditionalValue>4</AdditionalValue>
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
              {user ? (
                <CancelSubscription>Cancel Subscription</CancelSubscription>
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
              <Price>{amount}</Price>
              <SubTitle>per month</SubTitle>
            </FormRowContent>
            <FormRowContent>
              <Price>{amount * 12}</Price>
              <SubTitle>per year</SubTitle>
            </FormRowContent>
          </FormRow>
          <FormRow>
            <Additional>
              <AdditionalTitle>
                ADDITIONAL BRANDS (TOTAL ${6 * brands})
              </AdditionalTitle>
              <AdditionalContent>
                <AdditionalValue>7</AdditionalValue>
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
                <AdditionalValue>4</AdditionalValue>
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
              {user ? (
                <CancelSubscription
                  onClick={() => this.handleCancelSubscription}
                >
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
    const monthlyButton = (
      <Button
        className={!this.state.method && 'active'}
        onClick={this.toggleMethod}
      >
        MONTHLY
      </Button>
    );
    const annuallyButton = (
      <Button
        className={this.state.method && 'active'}
        onClick={this.toggleMethod}
      >
        ANNUALLY
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
        <Form>
          <ButtonWrapper>
            {monthlyButton}
            {annuallyButton}
          </ButtonWrapper>
          {formContent}
        </Form>
      </Wrapper>
    );
  }
}

Subscribe.propTypes = {
  user: PropTypes.object,
  OnGetUser: PropTypes.func,
  onUpdateUser: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  OnGetUser: () => dispatch(getUser.request()),
  onUpdateUser: value => dispatch(updateUser.request(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);
