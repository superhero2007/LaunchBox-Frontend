import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRouter = ({
  component: Component,
  isAuthenticated,
  to,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to={to} /> : <Component {...props} />
    }
  />
);

PublicRouter.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

PublicRouter.defaultProps = {
  to: '/home',
};

export default PublicRouter;
