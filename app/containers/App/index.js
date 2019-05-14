/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from 'containers/LandingPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import Register from 'containers/Register/Loadable';
import RegisterConfirm from 'containers/RegisterConfirm/Loadable';
import AccountActive from 'containers/AccountActive/Loadable';
import AddPayment from 'containers/AddPayment/Loadable';
import ActivePayment from 'containers/ActivePayment/Loadable';
import BizPage from 'containers/BizPage/Loadable';
import BrandPage from 'containers/BrandPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/register-confirm" component={RegisterConfirm} />
          <Route path="/account-active" component={AccountActive} />
          <Route path="/add-payment" component={AddPayment} />
          <Route path="/active-payment" component={ActivePayment} />
          <Route path="/home" component={HomePage} />
          <Route path="/biz" component={BizPage} />
          <Route path="/brand" component={BrandPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
