/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Right from 'images/right.svg';
import RightDisable from 'images/right__disable.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #0d2665;
`;

const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  margin-top: 12px;
  margin-bottom: 6px;
`;

const InputElement = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 7px;
  padding: 16px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;

  &:placeholder {
    color: rgba(27, 54, 124, 0.5);
  }

  &:focus,
  &.focus {
    padding: 23px 16px 8px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 16px;

  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: rgba(27, 54, 124, 0.5);
  pointer-events: none;

  transition: top 0.2s;
  transition: font-size 0.2s;

  input:focus + &,
  input.focus + & {
    font-size: 11px;
    line-height: 14px;
    top: 8px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 335px;
  height: 50px;
  margin-top: 16px;
`;

const Button = styled.button`
  width: 164px;
  height: 48px;
  background: #1877f2;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  margin-top: 34px;

  img {
    margin-left: 10px;
  }

  .disable {
    display: none;
  }

  &:disabled {
    background: #d2e5fd;
    color: #93b4de;
    .origin {
      display: none;
    }
    .disable {
      display: inline;
    }
  }
`;

class BrandInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value.value || '',
      site: props.value.site || '',
    };
  }

  handleBrand = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSite = e => {
    const { value } = e.target;
    this.setState({ site: value });
  };

  onNext = () => {
    const { value, site } = this.state;
    this.props.onNext({ site, value });
  };

  render() {
    const { value, site } = this.state;

    return (
      <Wrapper>
        <Title>Let's start with the name</Title>
        <SubTitle>Please enter your brand name</SubTitle>
        <InputWrapper>
          <InputElement
            type="text"
            value={value}
            onChange={this.handleBrand}
            className={value && 'focus'}
          />
          <Label>Brand Name</Label>
        </InputWrapper>
        <InputWrapper>
          <InputElement
            type="text"
            value={site}
            onChange={this.handleSite}
            className={site && 'focus'}
          />
          <Label>Website</Label>
        </InputWrapper>
        <Button onClick={this.onNext} disabled={!site || !value}>
          Next
          <img src={Right} alt="Right" className="origin" />
          <img src={RightDisable} alt="Right Disable" className="disable" />
        </Button>
      </Wrapper>
    );
  }
}

BrandInfo.propTypes = {
  onNext: PropTypes.func,
  value: PropTypes.object,
};

export default BrandInfo;
