import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ElementDelete from '../../../../images/element-delete.svg';
import InputDuplicate from '../../../../images/input-duplicate.svg';
import ElementDeleteHover from '../../../../images/element-delete__hover.svg';
import InputDuplicateHover from '../../../../images/input-duplicate__hover.svg';

const Wrapper = styled.div`
  height: 48px;
  background: ${props => props.color};
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: normal;
  text-align: center;
  color: #ffffff;
  padding: 15px;
  cursor: pointer;
  position: relative;

  span + span {
    margin-left: 12px;
  }

  &:hover {
    .button_group {
      display: flex;
    }
  }
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 2px solid #d6dbe9;
  background: white;

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

  width: 32px;
  height: 32px;
  border: 2px solid #d6dbe9;
  background: white;

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

const ButtonGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(10, 19, 41, 0.85);
  display: none;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 8px;
  }
`;

class Element extends React.PureComponent {
  render() {
    return (
      <Wrapper color={this.props.color}>
        <span>{this.props.icon}</span>
        <span>{this.props.value}</span>
        <ButtonGroup className="button_group">
          <DuplicateButton onClick={this.props.onDuplicate}>
            <img
              className="origin"
              src={InputDuplicate}
              alt="Input Duplicate"
            />
            <img
              className="hover"
              src={InputDuplicateHover}
              alt="Input Duplicate Hover"
            />
          </DuplicateButton>
          <DeleteButton onClick={this.props.onDelete}>
            <img className="origin" src={ElementDelete} alt="Input Edit" />
            <img
              className="hover"
              src={ElementDeleteHover}
              alt="Input Edit Hover"
            />
          </DeleteButton>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string,
  value: PropTypes.string,
  onDuplicate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Element;
