/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePrivate = ({
  component: Component,
  isAuthenticated,
  isConfirmed,
  confirm,
  to,
  path,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        isConfirmed || path === confirm ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: confirm,
              state: {
                redirect: props.location.pathname,
                isAuthenticated,
                isConfirmed,
              },
            }}
          />
        )
      ) : (
        <Redirect
          to={{
            pathname: to,
            state: {
              redirect: props.location.pathname,
              isAuthenticated,
              isConfirmed,
            },
          }}
        />
      )
    }
  />
);

RoutePrivate.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
  confirm: PropTypes.string,
};

RoutePrivate.defaultProps = {
  to: '/login',
  confirm: '/register-confirm',
};

export default RoutePrivate;
