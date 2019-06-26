import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-top: 8px;
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

const Button = styled(Link)`
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: #3166ed;
    color: #fff;
  }
`;

const ProgressWrapper = styled.div`
  position: relative;
  width: 400px;
  background: #d6dbe9;
  border-radius: 48px;
  height: 8px;
  margin-top: 28px;
`;

const Progress = styled.div`
  width: ${props => props.width}%;
  background: #1b367c;
  border-radius: 48px;
  height: 8px;
  position: absolute;
`;

class Subscription extends React.PureComponent {
  render() {
    const { company } = this.props;
    const { subscription } = company;

    if (!subscription) {
      const now = new Date();
      const subscriptionDate = new Date(company.createdAt);
      const diffTime = Math.abs(now.getTime() - subscriptionDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 7) {
        return (
          <Wrapper>
            <Title>Your trial period is over</Title>
            <SubTitle>To continue using Brandguide, please subscribe.</SubTitle>
            <Button to="/subscribe">SUBSCRIBE</Button>
          </Wrapper>
        );
      }

      return (
        <Wrapper>
          <SubTitle>Trial period ends after</SubTitle>
          <Title>{7 - diffDays} days</Title>
          <ProgressWrapper>
            <Progress width={100 - (diffDays * 100) / 7} />
          </ProgressWrapper>
          <Button to="/subscribe">SUBSCRIBE</Button>
        </Wrapper>
      );
    }

    const subscriptionDate = new Date(subscription.date);

    if (subscription.status === 1) {
      return (
        <Wrapper>
          <Title>Monthly Subscription</Title>
          <SubTitle>
            Next payment of ${subscription.amount} occurs on&nbsp;
            {subscriptionDate
              .toDateString()
              .split(' ')
              .slice(1)
              .join(' ')}
          </SubTitle>
          <Button to="/subscribe">Edit Subscription</Button>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Title>Your subscription has ended</Title>
        <SubTitle>To continue using Brandguide, please subscribe.</SubTitle>
        <Button to="/subscribe">SUBSCRIBE</Button>
      </Wrapper>
    );
  }
}

Subscription.propTypes = {
  company: PropTypes.object,
};

export default Subscription;
