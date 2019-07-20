import React from 'react';
import PropTypes from 'prop-types';
import CheckImage from 'images/check.png';
import UncheckImage from 'images/uncheck.png';
import Wrapper from './Wrapper';
import Hover from './Hover';

const Check = props => (
  <Wrapper onClick={props.onClick}>
    <img
      src={props.value ? CheckImage : UncheckImage}
      alt="Check"
      className="origin"
    />
    <Hover className="hover" value={props.value}>
      {props.value ? 'CHECK' : 'UNCHECK'}
    </Hover>
  </Wrapper>
);

Check.propTypes = {
  value: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Check;
