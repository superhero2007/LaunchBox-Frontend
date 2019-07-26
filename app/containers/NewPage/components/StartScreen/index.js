/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Right from 'images/right.svg';

import SmallLogoImage from 'images/brandguide_logo.svg';

const Wrapper = styled.div`
  padding: 32px;
  margin-top: 100px;
  height: calc(100% - 100px);
  width: 100%;
  background: #f8f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 72px;
  height: 72px;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #0d2665;
  margin-top: 52px;
`;

const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  margin-top: 16px;
`;

const Button = styled.button`
  width: 164px;
  height: 48px;
  margin-top: 36px;
  background: #1877f2;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #fff;

  img {
    margin-left: 10px;
  }
`;

const StartScreen = props => (
  <Wrapper>
    <Logo src={SmallLogoImage} alt="Logo" />
    <Title>Welcome to Brandguide!</Title>
    <SubTitle>We'll help you get started!</SubTitle>
    <Button onClick={() => props.onNext({})}>
      Let's go
      <img src={Right} alt="Right" className="origin" />
    </Button>
  </Wrapper>
);

StartScreen.propTypes = {
  onNext: PropTypes.func,
};

export default StartScreen;
