import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RightArrow from 'images/right-arrow.svg';
import RightArrowHover from 'images/right-arrow__hover.svg';

const Wrapper = styled.div`
  width: 328px;
  height: 56px;
  background: #fff;
  position: relative;
  border-radius: 7px;
  background: #fff;
  color: #1b367c;
  cursor: pointer;

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

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 17px;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  opacity: 0.5;
`;

const InputElement = styled.div`
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  padding: 26px 17px 11px;
`;

const RightArrowWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

class Element extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        <InputElement>{this.props.value}</InputElement>
        <Label htmlFor={this.props.label}>{this.props.label}</Label>
        <RightArrowWrapper>
          <img className="origin" src={RightArrow} alt="Arrow" />
          <img className="hover" src={RightArrowHover} alt="Arrow Hover" />
        </RightArrowWrapper>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Element;
