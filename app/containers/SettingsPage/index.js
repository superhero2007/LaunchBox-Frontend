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
import { createStructuredSelector } from 'reselect';

import { makeSelectUser, makeSelectCompany } from 'services/api/selectors';
import { updateUser, uploadPhoto, deletePhoto } from 'services/api/actions';
import CompanyAccount from 'images/company-account.svg';

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

/* eslint-disable react/prefer-stateless-function */
class SettingsPage extends React.PureComponent {
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
    const {
      user,
      company,
      onUploadPhoto,
      onDeletePhoto,
      onUpdateUser,
    } = this.props;
    return (
      <div className="settings">
        <Header />
        <div>
          <div className="settings__profile">
            <div className="content">
              <div className="settings__profile-photo">
                <div className="settings__title">YOUR PHOTO</div>
                <Photo
                  value={user.photo}
                  onUploadPhoto={onUploadPhoto}
                  onDeletePhoto={onDeletePhoto}
                />
              </div>
              <div className="settings__profile-info">
                <div className="settings__title">Full Name</div>
                <Input
                  label="fullName"
                  value={user.fullName}
                  onUpdate={onUpdateUser}
                />
                <div className="settings__title">Company name</div>
                <Input
                  label="companyName"
                  value={user.companyName}
                  onUpdate={onUpdateUser}
                />
                <div className="settings__title">Email</div>
                <ChangeEmail value={user.email} onUpdate={onUpdateUser} />
              </div>
              {user.role === 'Admin' && (
                <div className="settings__profile-social">
                  <div className="settings__title">ADMIN CONTROLS</div>
                  <div className="settings__profile-social__content">
                    <Social type="EDIT MEMBERS" link="/edit-members" />
                    <Social type="EDIT BRANDS" link="/edit-brands" />
                    <div className="settings__profile-social__content-static">
                      One-click sign in
                    </div>
                  </div>
                </div>
              )}
              {user.role === 'Member' && (
                <div className="settings__profile-member">
                  <div className="settings__title">COMPANY ACCOUNT</div>
                  <div className="settings__profile-member__content">
                    <div className="settings__profile-member__content-title">
                      Ketchup Creative’s Account
                    </div>
                    <img
                      className="settings__profile-member__content-img"
                      src={CompanyAccount}
                      alt="Company Account"
                    />
                    <button
                      type="button"
                      className="settings__profile-member__content-button"
                    >
                      CONTACT ADMIN
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {user.role === 'Admin' && (
            <div className="settings__payment">
              <div className="settings__payment-subscription">
                <div className="settings__title">Subscription</div>
                <div className="settings__payment-subscription__content">
                  <Subscription company={company} />
                </div>
              </div>
              <div className="settings__payment-method">
                <div className="settings__title">Payment method</div>
                <div className="settings__payment-method__content">
                  <Payment company={company} />
                </div>
              </div>
            </div>
          )}
          <div className={`settings__account ${user.role}`}>
            {user.role === 'Admin' && (
              <div className="settings__account-order">
                <div className="settings__title">Order History</div>
                <div className="settings__account-order__content">
                  <Order list={list} />
                </div>
              </div>
            )}
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
  company: PropTypes.object,
  onUpdateUser: PropTypes.func,
  onUploadPhoto: PropTypes.func,
  onDeletePhoto: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  company: makeSelectCompany(),
});

const mapDispatchToProps = dispatch => ({
  onUpdateUser: value => dispatch(updateUser.request(value)),
  onUploadPhoto: value => dispatch(uploadPhoto.request(value)),
  onDeletePhoto: () => dispatch(deletePhoto.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPage);
