/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Right from 'images/right.svg';
import RightDisable from 'images/right__disable.svg';

import Like from 'images/like.svg';

import Element from '../SocialMedia/Element';

const Wrapper = styled.div`
  padding: 32px;
  margin-top: 100px;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  background: #f8f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightImg = styled.img`
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
  margin-top: 38px;
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
  margin-top: 24px;
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

const LeftWrapper = styled.div`
  width: 66%;
  margin-right: 12.5%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightWrapper = styled.div`
  width: 33%;
`;

const BrandWrapper = styled.div`
  width: 50%;
  padding: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid rgba(13, 38, 101, 0.05);
`;

const Logo = styled.div`
  background: #fff;
  box-shadow: 0px 12px 36px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const ElementWrapper = styled.div`
  width: 50%;
  padding: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const LeftTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1b367c;
  opacity: 0.4;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 32px;

  div + div {
    margin-left: 6px;
  }
`;

const Color = styled.div`
  background: ${props => props.color};
  border-radius: 7px;
  width: 60px;
  height: 60px;
`;

const Brand = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #0d2665;
  margin-top: 36px;
  text-align: center;
`;

const Site = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #1b367c;
  margin-top: 4px;
  border-bottom: 1px solid rgba(27, 54, 124, 0.3);
`;

const FontContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 34px;
  width: 100%;
`;

const FontElement = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  border-radius: 7px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  & + & {
    margin-top: 8px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 12px;
  width: 100%;
`;

const SocialElement = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  border-radius: 7px;
  width: 100%;

  & + & {
    margin-top: 8px;
  }
`;

const LastScreen = props => (
  <Wrapper>
    <LeftWrapper>
      <BrandWrapper>
        <Logo>
          <LogoWrapper>
            <img
              src={`${process.env.API_ENTRY_PREFIX}${props.brand.logo}`}
              alt="logo"
            />
          </LogoWrapper>
        </Logo>
        <Brand>{props.brand.value}</Brand>
        <Site>{props.brand.site}</Site>
      </BrandWrapper>
      <ElementWrapper>
        <LeftTitle>Colors</LeftTitle>
        <ColorContainer>
          {props.brand.colors.map(color => (
            <Color key={color} color={color} />
          ))}
        </ColorContainer>
        <LeftTitle>Fonts</LeftTitle>
        <FontContainer>
          {props.brand.fonts.map(font => (
            <FontElement key={font.value}>{font.name}</FontElement>
          ))}
        </FontContainer>
        <LeftTitle>Social networks</LeftTitle>
        <SocialContainer>
          {props.brand.social.map(element => (
            <SocialElement key={element._id}>
              <Element type={element.type} value={element.value} />
            </SocialElement>
          ))}
        </SocialContainer>
      </ElementWrapper>
    </LeftWrapper>
    <RightWrapper>
      <RightImg src={Like} alt="Logo" />
      <Title>Congratulations!</Title>
      <SubTitle>
        You have completed the first step in Brandguide Keep up the good work!
      </SubTitle>
      <Button onClick={() => props.onNext({})}>
        Let's go
        <img src={Right} alt="Right" className="origin" />
        <img src={RightDisable} alt="Right Disable" className="disable" />
      </Button>
    </RightWrapper>
  </Wrapper>
);

LastScreen.propTypes = {
  onNext: PropTypes.func,
  brand: PropTypes.object,
};

export default LastScreen;
