import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 204px;
  background: #fff;
  overflow: hidden;
  border-radius: 7px;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 17px 27px;
  display: flex;
`;

const Body = styled.div`
  border-top: 1px solid #ececf7;
  padding: 16px 27px 24px;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;

  & + & {
    margin-top: 28px;
  }
`;

const Th = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1b367c;
  opacity: 0.5;
  width: 30%;
`;

const Td = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  width: 30%;
`;

const Button = styled.button`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #3166ed;
  border-radius: 7px;
  border-bottom: 1px solid rgba(49, 102, 237, 0.3);
  width: 50px;

  & + & {
    margin-left: 25px;
  }

  &:hover {
    font-weight: bold;
    font-size: 16px;
  }
`;

class Order extends React.PureComponent {
  rows = () =>
    this.props.list.map(element => (
      <Row key={element.date}>
        <Td>{element.date}</Td>
        <Td>{element.type}</Td>
        <Td>
          <Button>PDF</Button>
        </Td>
      </Row>
    ));

  render() {
    return (
      <Wrapper>
        <Header>
          <Th>DATE</Th>
          <Th>TYPE</Th>
          <Th>INVOICE</Th>
        </Header>
        <Body>{this.rows()}</Body>
      </Wrapper>
    );
  }
}

Order.propTypes = {
  list: PropTypes.array,
};

export default Order;
