/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  selectState,
  makeSelectUser,
  makeSelectCompany,
} from 'services/api/selectors';
import { getUser, getCompany, clearError } from 'services/api/actions';
import reducer from 'services/api/reducer';
import saga from 'services/api/saga';

import RoutePublic from 'routes/RoutePublic';
import RoutePrivate from 'routes/RoutePrivate';
import RouteConfirm from 'routes/RouteConfirm';

// import HomePage from 'containers/HomePage/Loadable';
// import BizPage from 'containers/BizPage/Loadable';
import BrandLandingPage from 'containers/BrandLandingPage/Loadable';
import BrandPage from 'containers/BrandPage/Loadable';
import NewPage from 'containers/NewPage/Loadable';
import Login from 'containers/Login/Loadable';
import Register from 'containers/Register/Loadable';
import ResetPasswordRequest from 'containers/ResetPasswordRequest/Loadable';
import ResetPassword from 'containers/ResetPassword/Loadable';
import InvitationAccept from 'containers/InvitationAccept/Loadable';
import RegisterConfirm from 'containers/RegisterConfirm/Loadable';
import Confirmation from 'containers/Confirmation/Loadable';
import EmailConfirmation from 'containers/EmailConfirmation/Loadable';
import AccountActive from 'containers/AccountActive/Loadable';
import AddPayment from 'containers/AddPayment/Loadable';
import Subscribe from 'containers/Subscribe/Loadable';
import ActivePayment from 'containers/ActivePayment/Loadable';
import ChangeEmail from 'containers/ChangeEmail/Loadable';
import ChangePassword from 'containers/ChangePassword/Loadable';
import ClearAccount from 'containers/ClearAccount/Loadable';
import EditMembers from 'containers/EditMembers/Loadable';
import EditBrands from 'containers/EditBrands/Loadable';
import DeleteAccount from 'containers/DeleteAccount/Loadable';
import SettingsPage from 'containers/SettingsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token && !this.props.user && !this.props.company) {
      this.props.onGetUser();
    }
    if (this.props.user) {
      // eslint-disable-next-line no-undef
      gtag('set', { user_id: this.props.user._id });
      // eslint-disable-next-line no-undef
      ga('set', 'userId', this.props.user._id);
    }
  };

  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) {
      this.props.onClearError();
    }
  };

  render() {
    const token = localStorage.getItem('token');
    if (this.props.state && token && !this.props.user && !this.props.company) {
      return <div />;
    }

    const isAuthenticated = !!token;
    const isConfirmed = !!(this.props.user && this.props.user.confirmed);

    return (
      <div>
        <Switch>
          <Route exact path="/" component={BrandLandingPage} />
          <RouteConfirm
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/confirmation/:token"
            component={Confirmation}
          />
          <RoutePublic
            isAuthenticated={isAuthenticated}
            path="/login"
            component={Login}
          />
          <RoutePublic
            isAuthenticated={isAuthenticated}
            path="/register"
            component={Register}
          />
          <RoutePublic
            isAuthenticated={isAuthenticated}
            path="/reset_password_request"
            component={ResetPasswordRequest}
          />
          <RoutePublic
            isAuthenticated={isAuthenticated}
            path="/reset_password/:token"
            component={ResetPassword}
          />
          <RoutePublic
            isAuthenticated={isAuthenticated}
            path="/invitation/:token"
            component={InvitationAccept}
          />
          <RouteConfirm
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/register-confirm"
            component={RegisterConfirm}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/clear-account"
            component={ClearAccount}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/edit-members"
            component={EditMembers}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/edit-brands"
            component={EditBrands}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/change-email"
            component={ChangeEmail}
          />

          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/email_confirmation/:token"
            component={EmailConfirmation}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/change-password"
            component={ChangePassword}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/account-active"
            component={AccountActive}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/add-payment"
            component={AddPayment}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/subscribe"
            component={Subscribe}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/active-payment"
            component={ActivePayment}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/old"
            component={BrandPage}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/home"
            component={NewPage}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/settings"
            component={SettingsPage}
          />
          <Route path="/delete-account" component={DeleteAccount} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  company: PropTypes.object,
  location: PropTypes.object.isRequired,
  state: PropTypes.object,
  onGetUser: PropTypes.func,
  onClearError: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  company: makeSelectCompany(),
  state: selectState,
});

const mapDispatchToProps = dispatch => ({
  onGetUser: () => dispatch(getUser.request()),
  onGetCompany: () => dispatch(getCompany.request()),
  onClearError: () => dispatch(clearError()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'service', reducer });
const withSaga = injectSaga({ key: 'service', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
)(App);
