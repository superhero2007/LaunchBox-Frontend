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
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { selectState, makeSelectUser } from 'services/api/selectors';
import { getUser } from 'services/api/actions';
import reducer from 'services/api/reducer';
import saga from 'services/api/saga';

import RoutePublic from 'routes/RoutePublic';
import RoutePrivate from 'routes/RoutePrivate';
import RouteConfirm from 'routes/RouteConfirm';

import LandingPage from 'containers/LandingPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import Register from 'containers/Register/Loadable';
import RegisterConfirm from 'containers/RegisterConfirm/Loadable';
import Confirmation from 'containers/Confirmation/Loadable';
import AccountActive from 'containers/AccountActive/Loadable';
import AddPayment from 'containers/AddPayment/Loadable';
import ActivePayment from 'containers/ActivePayment/Loadable';
import BizPage from 'containers/BizPage/Loadable';
import BrandPage from 'containers/BrandPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token && !this.props.user) {
      this.props.OnGetUser(token);
    }
  };

  render() {
    const token = localStorage.getItem('token');
    if (this.props.state && token && !this.props.user) {
      return <div />;
    }

    const isAuthenticated = !!this.props.user;
    const isConfirmed = !!(this.props.user && this.props.user.confirmed);

    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
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
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/register-confirm"
            component={RegisterConfirm}
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
            path="/active-payment"
            component={ActivePayment}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/home"
            component={HomePage}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/biz"
            component={BizPage}
          />
          <RoutePrivate
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/brand"
            component={BrandPage}
          />
          <RouteConfirm
            isAuthenticated={isAuthenticated}
            isConfirmed={isConfirmed}
            path="/confirmation/:token"
            component={Confirmation}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  state: PropTypes.object,
  OnGetUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  state: selectState,
});

const mapDispatchToProps = dispatch => ({
  OnGetUser: token => dispatch(getUser.request(token)),
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
)(App);
