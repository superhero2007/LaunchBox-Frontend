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
} from 'services/api/actions';

import Header from 'components/Header';
import Photo from './components/Photo';
import Input from './components/Input';
import Social from './components/Social';

import './style.scss';
import ExitSetings from '../../images/exit-settings.svg';

/* eslint-disable react/prefer-stateless-function */
class SettingsPage extends React.PureComponent {
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token && !this.props.user) {
      this.props.OnGetUser();
    }
  };

  render() {
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
                <Input
                  label="email"
                  value={this.props.user.email}
                  onUpdate={this.props.onUpdateUser}
                />
              </div>
              <div className="settings__profile-social">
                <div className="settings__title">Soical Network</div>
                <div className="settings__profile-social__content">
                  <Social type="facebook" onAdd={this.props.onSocialAdd} />
                  <Social type="twitter" onAdd={this.props.onSocialAdd} />
                  <div className="settings__profile-social__content-static">
                    One-click sign in
                  </div>
                </div>
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
  onSocialAdd: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  OnGetUser: () => dispatch(getUser.request()),
  onUpdateUser: value => dispatch(updateUser.request(value)),
  onUploadPhoto: value => dispatch(uploadPhoto.request(value)),
  onDeletePhoto: () => dispatch(deletePhoto.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPage);
