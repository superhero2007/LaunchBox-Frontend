import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputEdit from '../../../../images/input-edit.svg';
import InputDuplicate from '../../../../images/input-duplicate.svg';

const Wrapper = styled.div`
  width: 328px;
  height: 56px;
  background: #fff;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 19px;
  left: 17px;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: rgba(66, 77, 107, 0.5);

  transition: top 0.2s;
  transition: font-size 0.2s;

  input:focus + &,
  input.focus + & {
    font-weight: normal;
    font-size: 11px;
    line-height: 14px;
    color: #1b367c;
    opacity: 0.5;
    top: 10px;
  }
`;

const InputElement = styled.input`
  border: none;
  width: 100%;
  height: 100%;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;

  &:focus,
  &.focus {
    padding: 26px 17px 11px;
  }

  &.disable {
    pointer-events: none;
  }
`;

const EditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: 2px solid #d6dbe9;
`;

const DuplicateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 12px;
  right: 52px;
  width: 32px;
  height: 32px;
  border: 2px solid #d6dbe9;
`;

class Element extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      status: true,
    };
  }

  handleValueChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
    this.setState({ value });
  };

  handleStatusChange = () => {
    this.setState(state => ({
      status: !state.status,
    }));
  };

  render() {
    const inputClass = [];
    if (this.state.value) {
      inputClass.push('focus');
    }
    if (!this.state.status) {
      inputClass.push('disable');
    }

    return (
      <Wrapper>
        <InputElement
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          id={this.props.label}
          className={inputClass.join(' ')}
        />
        <Label htmlFor={this.props.label}>{this.props.label}</Label>
        <EditButton onClick={this.handleStatusChange}>
          <img src={InputEdit} alt="Input Edit" />
        </EditButton>
        <DuplicateButton onClick={this.handleStatusChange}>
          <img src={InputDuplicate} alt="Input Duplicate" />
        </DuplicateButton>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Element;
