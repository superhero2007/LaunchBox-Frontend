import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputEdit from '../../../../images/input-edit.svg';
import InputDuplicate from '../../../../images/input-duplicate.svg';
import InputEditHover from '../../../../images/input-edit__hover.svg';
import InputDuplicateHover from '../../../../images/input-duplicate__hover.svg';

const Wrapper = styled.div`
  width: 328px;
  height: 56px;
  background: #fff;
  position: relative;
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
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: 2px solid #d6dbe9;

  .hover {
    display: none;
  }

  &:hover {
    background: #1b367c;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
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

  .hover {
    display: none;
  }

  &:hover {
    background: #1b367c;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
`;

class Element extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.element.value,
    };
  }

  handleValueChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    const inputClass = [];
    if (this.state.value) {
      inputClass.push('focus');
    }

    return (
      <Wrapper>
        <InputElement
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          onBlur={this.props.onChange}
          className={inputClass.join(' ')}
        />
        <DuplicateButton onClick={this.props.onDuplicate}>
          <img className="origin" src={InputDuplicate} alt="Input Duplicate" />
          <img
            className="hover"
            src={InputDuplicateHover}
            alt="Input Duplicate Hover"
          />
        </DuplicateButton>
        <DeleteButton onClick={this.props.onEdit}>
          <img className="origin" src={InputEdit} alt="Input Edit" />
          <img className="hover" src={InputEditHover} alt="Input Edit Hover" />
        </DeleteButton>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  element: PropTypes.object,
  onChange: PropTypes.func,
  onDuplicate: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Element;
