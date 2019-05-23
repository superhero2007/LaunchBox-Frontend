import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #fff;
  border: 2px solid #dfe8ff;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${props => props.color};

  .icon {
    font-size: 20px;
    margin-top: -3px;
  }

  span + span {
    margin-left: 8px;
  }

  &:hover {
    background: ${props => props.color};
    border-color: ${props => props.color};
    color: #fff;
  }
`;

class Social extends React.PureComponent {
  render() {
    let color;
    if (this.props.type === 'facebook') {
      color = '#3B5998';
    }
    if (this.props.type === 'twitter') {
      color = '#1DA1F2';
    }

    return (
      <Wrapper onClick={this.props.onAdd} color={color}>
        <span className="icon">+</span>
        <span>{this.props.type}</span>
      </Wrapper>
    );
  }
}

Social.propTypes = {
  type: PropTypes.string,
  onAdd: PropTypes.func,
};

export default Social;
