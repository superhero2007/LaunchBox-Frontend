/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputEdit from '../../../images/input-edit.svg';
import InputEditHover from '../../../images/input-edit__hover.svg';

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

const EditButton = styled(Link)`
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

class ChangeEmail extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <InputElement type="text" value={this.props.value} disabled />
        <EditButton to="/change-email">
          <img className="origin" src={InputEdit} alt="Input Edit" />
          <img className="hover" src={InputEditHover} alt="Input Edit Hover" />
        </EditButton>
      </Wrapper>
    );
  }
}

ChangeEmail.propTypes = {
  value: PropTypes.string,
};

export default ChangeEmail;
