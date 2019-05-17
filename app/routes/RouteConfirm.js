/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteConfirm = ({
  component: Component,
  isAuthenticated,
  isConfirmed,
  confirm,
  to,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        isConfirmed ? (
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
        ) : (
          <Component isConfirmed={isConfirmed} {...props} />
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

RouteConfirm.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
  confirm: PropTypes.string,
};

RouteConfirm.defaultProps = {
  to: '/login',
  confirm: '/home',
};

export default RouteConfirm;
