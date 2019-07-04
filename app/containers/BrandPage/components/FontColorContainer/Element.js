import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputDuplicate from '../../../../images/input-duplicate.svg';
import InputDuplicateHover from '../../../../images/input-duplicate__hover.svg';

const Wrapper = styled.div`
  position: relative;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  overflow: hidden;

  &:hover {
    .button_group {
      display: flex;
    }
  }
`;

const Content = styled.div`
  width: 108px;
  height: 28px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 32px;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  background: white;
  color: #1b367c;
  margin-top: 8px;

  span {
    font-family: Muli;
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    margin-left: 12px;
  }

  .hover {
    display: none;
  }

  &:hover {
    background: #1b367c;
    color: #fff;

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
  flex-direction: column;

  div + div {
    margin-top: 8px;
  }
`;

class Element extends React.PureComponent {
  render() {
    return (
      <Wrapper color={this.props.value}>
        <Content>{this.props.value}</Content>
        <ButtonGroup className="button_group">
          <CopyButton>
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
            <span>Copy HEX</span>
          </CopyButton>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  value: PropTypes.string,
};

export default Element;
