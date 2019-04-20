import React from 'react';
import styled from 'styled-components';
import Currency from 'components/Currency';
import Vat from 'components/Vat';
import FooterTotal from './FooterTotal';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 84px;
  width: 100%;
  padding-left: 26px;
  background: #ffffff;
  z-index: 5;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateWrapper = styled.div`
  margin: 0 56px;
  cursor: pointer;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: normal;
  color: #58454b;

  i + span {
    margin-left: 12px;
  }

  &:hover {
    color: #6c4853;
  }
`;

const Icon = styled.i`
  cursor: pointer;
  color: #58454b;

  &:hover {
    color: #6c4853;
  }
`;

const Footer = () => (
  <Wrapper>
    <SubWrapper>
      <Currency />
      <Vat />
    </SubWrapper>
    <CenterWrapper>
      <Icon className="fas fa-arrow-left" />
      <DateWrapper>
        <Icon className="far fa-calendar" />
        <span>May 2019</span>
      </DateWrapper>
      <Icon className="fas fa-arrow-right" />
    </CenterWrapper>
    <SubWrapper>
      <FooterTotal title="Balance" price="$20,432.48" color="#27C478" />
      <FooterTotal title="Available Cash" price="$28,729.00" color="#58454B" />
    </SubWrapper>
  </Wrapper>
);

export default Footer;
