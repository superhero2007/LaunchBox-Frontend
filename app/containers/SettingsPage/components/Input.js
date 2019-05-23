import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputEdit from '../../../images/input-edit.svg';
import InputEditHover from '../../../images/input-edit__hover.svg';
import Check from '../../../images/check.svg';
import CheckHover from '../../../images/check__hover.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #fff;
  position: relative;
  padding: 14px 19px;
  border-radius: 7px;
  margin-bottom: 16px;
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
  background: #fff;
  border-radius: 7px;

  .hover {
    display: none;
  }

  &:hover {
    background: #1b367c;
    border-color: #1b367c;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
`;

const CheckButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: 2px solid rgba(60, 223, 145, 0.2);
  background: #fff;
  border-radius: 7px;

  .hover {
    display: none;
  }

  &:hover {
    background: #3cdf91;
    border-color: #3cdf91;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
`;

const CancelButton = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: rgba(61, 47, 61, 0.5);
  border-bottom: 1px solid rgba(158, 151, 158, 0.3);
  position: absolute;
  right: 60px;
  top: 20px;
  cursor: pointer;
`;

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      edit: false,
    };
  }

  handleValueChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  onToggle = () => {
    this.setState(state => ({ edit: !state.edit }));
  };

  onComplete = () => {
    this.setState({ edit: false });
    const updateObj = {};
    updateObj[this.props.label] = this.state.value;
    this.props.onUpdate(updateObj);
  };

  render() {
    let editButton;
    if (this.state.edit) {
      editButton = (
        <div>
          <CheckButton onClick={this.onComplete}>
            <img className="origin" src={Check} alt="Input Check" />
            <img className="hover" src={CheckHover} alt="Input Check Hover" />
          </CheckButton>
          <CancelButton onClick={this.onToggle}>Cancel</CancelButton>
        </div>
      );
    } else {
      editButton = (
        <EditButton onClick={this.onToggle}>
          <img className="origin" src={InputEdit} alt="Input Edit" />
          <img className="hover" src={InputEditHover} alt="Input Edit Hover" />
        </EditButton>
      );
    }

    return (
      <Wrapper>
        <InputElement
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          disabled={!this.state.edit}
        />
        {editButton}
      </Wrapper>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default Input;
