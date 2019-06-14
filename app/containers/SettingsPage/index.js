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
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { makeSelectUser } from 'services/api/selectors';
import {
  getUser,
  updateUser,
  uploadPhoto,
  deletePhoto,
  userSubscribe,
} from 'services/api/actions';

import Header from 'components/Header';
import Photo from './components/Photo';
import Input from './components/Input';
import ChangeEmail from './components/ChangeEmail';
import Social from './components/Social';
import Order from './components/Order';
import Subscription from './components/Subscription';
import Payment from './components/Payment';
import ChangePassword from './components/ChangePassword';
import ClearAccount from './components/ClearAccount';
import DeleteAccount from './components/DeleteAccount';

import './style.scss';
import ExitSetings from '../../images/exit-settings.svg';

const publicKey = process.env.NUMMUSPAY_PUBLIC_KEY;

/* eslint-disable react/prefer-stateless-function */
class SettingsPage extends React.PureComponent {
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token && !this.props.user) {
      this.props.OnGetUser();
    }
  };

  handleSubscription = () => {
    const { user } = this.props;
    const data = {
      email: user.email,
      firstName: user.fullName
        .split(' ')
        .slice(0, -1)
        .join(' '),
      lastName: user.fullName
        .split(' ')
        .slice(-1)
        .join(' '),
      billingAddress: '1700-1712 Cadiz St',
      zip: '16777',
      number: '4242424242424242',
      month: '10',
      year: '2020',
      cvv: '735',
    };

    // eslint-disable-next-line no-undef
    const nummuspay = Nummuspay || {};
    nummuspay.SetPublicKey(publicKey);
    nummuspay
      .CreateToken(data)
      .done(token => {
        this.props.onSubscription({
          paymentToken: token,
          amount: 12,
        });
      })
      .fail(() => {});
  };

  render() {
    const list = [
      {
        _id: 1,
        type: 'Monthly',
        date: 'March 30, 2019',
      },
      {
        _id: 2,
        type: 'Monthly',
        date: 'February 28, 2019',
      },
      {
        _id: 3,
        type: 'Monthly',
        date: 'January 31, 2019',
      },
    ];
    return (
      <div>
        <Header />
        <div className="settings">
          <Link to="/" className="settings__exit">
            <img src={ExitSetings} alt="Exit Settings" />
            <span className="settings__exit-title">Exit Settings</span>
          </Link>
          <div className="settings__profile">
            <div className="content">
              <div className="settings__profile-photo">
                <div className="settings__title">YOUR PHOTO</div>
                <Photo
                  value={this.props.user.photo}
                  onUploadPhoto={this.props.onUploadPhoto}
                  onDeletePhoto={this.props.onDeletePhoto}
                />
              </div>
              <div className="settings__profile-info">
                <div className="settings__title">Full Name</div>
                <Input
                  label="fullName"
                  value={this.props.user.fullName}
                  onUpdate={this.props.onUpdateUser}
                />
                <div className="settings__title">Company name</div>
                <Input
                  label="companyName"
                  value={this.props.user.companyName}
                  onUpdate={this.props.onUpdateUser}
                />
                <div className="settings__title">Email</div>
                <ChangeEmail
                  value={this.props.user.email}
                  onUpdate={this.props.onUpdateUser}
                />
              </div>
              <div className="settings__profile-social">
                <div className="settings__title">Soical Network</div>
                <div className="settings__profile-social__content">
                  <Social
                    type="facebook"
                    value={null}
                    onAdd={() => {}}
                    onDelete={() => {}}
                  />
                  <Social
                    type="twitter"
                    value={null}
                    onAdd={() => {}}
                    onDelete={() => {}}
                  />
                  <div className="settings__profile-social__content-static">
                    One-click sign in
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="settings__payment">
            <div className="settings__payment-subscription">
              <div className="settings__title">Subscription</div>
              <div className="settings__payment-subscription__content">
                <Subscription subscription={this.props.user.subscription} />
              </div>
            </div>
            <div className="settings__payment-method">
              <div className="settings__title">Payment method</div>
              <div className="settings__payment-method__content">
                <Payment user={this.props.user} />
              </div>
            </div>
          </div>
          <div className="settings__account">
            <div className="settings__account-order">
              <div className="settings__title">Order History</div>
              <div className="settings__account-order__content">
                <Order list={list} />
              </div>
            </div>
            <div className="settings__account-management">
              <div className="settings__title">Account management</div>
              <div className="settings__account-management__content">
                <ChangePassword />
                <ClearAccount />
                <DeleteAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SettingsPage.propTypes = {
  user: PropTypes.object,
  OnGetUser: PropTypes.func,
  onUpdateUser: PropTypes.func,
  onUploadPhoto: PropTypes.func,
  onDeletePhoto: PropTypes.func,
  onSubscription: PropTypes.func,
  // onSocialAdd: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  OnGetUser: () => dispatch(getUser.request()),
  onUpdateUser: value => dispatch(updateUser.request(value)),
  onUploadPhoto: value => dispatch(uploadPhoto.request(value)),
  onDeletePhoto: () => dispatch(deletePhoto.request()),
  onSubscription: value => dispatch(userSubscribe.request(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPage);
