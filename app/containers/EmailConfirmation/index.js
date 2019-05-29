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
import { updateEmailConfirm } from 'services/api/actions';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError } from 'services/api/selectors';

/* eslint-disable react/prefer-stateless-function */
class EmailConfirmation extends React.PureComponent {
  componentDidMount = () => {
    const { token } = this.props.match.params;
    this.props.OnUpdateEmailConfirm(token);
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.loading && !newProps.error) {
      this.props.history.push('/settings');
    }
  }

  render() {
    return <div>This link is invalid link</div>;
  }
}

EmailConfirmation.propTypes = {
  OnUpdateEmailConfirm: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    OnUpdateEmailConfirm: token => dispatch(updateEmailConfirm.request(token)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailConfirmation);
