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
import { compose } from 'redux';
import { registerConfirmation } from 'services/api/actions';
import reducer from 'services/api/reducer';
import saga from 'services/api/saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* eslint-disable react/prefer-stateless-function */
class Confirmation extends React.PureComponent {
  componentDidMount = () => {
    if (!this.props.isConfirmed) {
      const { token } = this.props.match.params;
      this.props.OnRegisterConfirm(token);
    }
  };

  render() {
    return <div>This link is invalid link</div>;
  }
}

Confirmation.propTypes = {
  OnRegisterConfirm: PropTypes.func,
  match: PropTypes.object,
  isConfirmed: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    OnRegisterConfirm: token => dispatch(registerConfirmation.request(token)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'service', reducer });
const withSaga = injectSaga({ key: 'service', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Confirmation);
