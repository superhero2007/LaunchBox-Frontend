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
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// import PrivateRouter from 'router/PrivateRouter';
import PublicRouter from 'router/PublicRouter';

import LandingPage from 'containers/LandingPage/Loadable';
// import HomePage from 'containers/HomePage/Loadable';
// import Login from 'containers/Login/Loadable';
// import SignUp from 'containers/SignUp/Loadable';
// import BizPage from 'containers/BizPage/Loadable';
// import BrandPage from 'containers/BrandPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { makeSelectUser } from 'services/api/selectors';
import reducer from 'services/api/reducer';
import saga from 'services/api/saga';

import GlobalStyle from '../../global-styles';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    const isAuthenticated = !!this.props.user;
    console.log(isAuthenticated);
    console.log(this.props.location);
    return (
      <div>
        <Switch>
          <PublicRouter
            isAuthenticated={isAuthenticated}
            path="/"
            component={LandingPage}
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
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'service', reducer });
const withSaga = injectSaga({ key: 'service', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
