import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 320px;
  background: #fff;
  overflow: hidden;
  border-radius: 7px;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #1b367c;
`;

const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #1b367c;
  border-radius: 7px;
  margin-top: 12px;
`;

const Button = styled.button`
  border: 2px solid #dfe8ff;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #3166ed;
  border-radius: 7px;
  width: 252px;
  height: 48px;
  margin-top: 28px;

  &:hover {
    background: #3166ed;
    color: #fff;
  }
`;

class Subscription extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Monthly Subscription</Title>
        <SubTitle>Next payment of $12 occurs on May 31, 2019.</SubTitle>
        <Button type="button" onClick={this.props.onCancel}>
          Cancel Subscription
        </Button>
      </Wrapper>
    );
  }
}

Subscription.propTypes = {
  onCancel: PropTypes.func,
};

export default Subscription;
