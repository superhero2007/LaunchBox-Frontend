import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputElement = styled.input`
  padding: 9px 8px 7px ${props => props.paddingLeft}px;
  width: 100%;
  text-align: ${props => props.align};
  border: 1px solid rgba(152, 178, 246, 0.2);
  height: 35px;
  color: #58454b;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  &:focus {
    color: #3166ed;
  }

  &::placeholder {
    text-transform: capitalize;
    color: #58454b;
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
        placeholder={this.props.placeholder}
        align={this.props.align}
        paddingLeft={this.props.paddingLeft}
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={() => this.props.onChange(this.state.value)}
      />
    );
  }
}

Input.propTypes = {
  align: PropTypes.string,
  paddingLeft: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Input;
