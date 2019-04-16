import React from 'react';
import CheckImage from '../../images/check.png';
import UncheckImage from '../../images/uncheck.png';
import CheckWrapper from './CheckWrapper';
import ImageWrapper from './ImageWrapper';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  setActive = active => {
    this.setState({ active });
  };

  render() {
    return (
      <CheckWrapper>
        <ImageWrapper
          color="rgba(49, 102, 237, 0.1)"
          hover="#3166ed"
          onClick={() => this.setActive(1)}
          className={this.state.active === 1 ? 'active' : ''}
        >
          <img src={CheckImage} alt="Check" />
        </ImageWrapper>
        <ImageWrapper
          color="rgba(227, 120, 152, 0.1)"
          hover="#e37898"
          onClick={() => this.setActive(2)}
          className={this.state.active === 2 ? 'active' : ''}
        >
          <img src={UncheckImage} alt="Check" />
        </ImageWrapper>
      </CheckWrapper>
    );
  }
}

export default Check;
