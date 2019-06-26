/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';

class InvitationAccept extends React.PureComponent {
  componentDidMount = () => {
    const { token } = this.props.match.params;
    const { email, companyName } = JSON.parse(atob(token));
    this.props.history.push({
      pathname: '/register',
      state: { email, companyName },
    });
  };

  render() {
    return <div>This link is invalid link</div>;
  }
}

InvitationAccept.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default InvitationAccept;
