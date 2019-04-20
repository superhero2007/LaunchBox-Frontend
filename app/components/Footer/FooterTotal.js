import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 22px;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: normal;
  text-align: right;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(88, 69, 75, 0.5);
  margin-bottom: 4px;
`;

const Price = styled.div`
  color: ${props => props.color};
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: normal;
  text-align: right;
`;

const FooterTotal = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Price color={props.color}>{props.price}</Price>
  </Wrapper>
);

FooterTotal.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
};

export default FooterTotal;
