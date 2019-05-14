import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputElement = styled.input`
  padding: 9px 12px 7px;
  width: 100%;
  text-align: ${props => props.align};

  &:focus {
    border: 1px solid rgba(152, 178, 246, 0.2);
    height: 35px;
    color: #1b367c;
  }

  &::placeholder {
    text-transform: capitalize;
  }
`;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <InputElement
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={() => this.props.onChange(this.state.value)}
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
