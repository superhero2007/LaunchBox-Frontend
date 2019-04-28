import React from 'react';
import PropTypes from 'prop-types';
import CheckImage from '../../images/check.png';
import UncheckImage from '../../images/uncheck.png';
import CheckWrapper from './CheckWrapper';
import ImageWrapper from './ImageWrapper';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.value,
    };
  }

  setActive = active => {
    this.setState({ active });
    this.props.onClick(active);
  };

  render() {
    return (
      <CheckWrapper>
        <ImageWrapper
          color="rgba(49, 102, 237, 0.1)"
          hover="#3166ed"
          onClick={() => this.setActive(true)}
          className={this.state.active === true ? 'active' : ''}
        >
          <img src={CheckImage} alt="Check" />
        </ImageWrapper>
        <ImageWrapper
          color="rgba(227, 120, 152, 0.1)"
          hover="#e37898"
          onClick={() => this.setActive(false)}
          className={this.state.active === false ? 'active' : ''}
        >
          <img src={UncheckImage} alt="Check" />
        </ImageWrapper>
      </CheckWrapper>
    );
  }
}

Check.propTypes = {
  value: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Check;
