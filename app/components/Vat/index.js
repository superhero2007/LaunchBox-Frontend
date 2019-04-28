import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import DropdownButton from './DropdownButton';
import DropdownContent from './DropdownContent';

const Button = styled.button`
  width: 48px;
  height: 40px;
  padding: 0 18px;
  font-size: 30px;
  cursor: pointer;
  color: #6c4853;
  background: white;
`;

const SaveButton = styled.button`
  width: 184px;
  height: 40px;
  background: #3166ed;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #3166ed;
    border: 2px solid #3166ed;
    background: #fff;
  }
`;

const DropdownContentTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: #6c4853;
  width: 184px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownContentAction = styled.div`
  border: 1px solid #ececf6;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

class Vat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      vat: props.vat,
    };
  }

  toggleMenu = () => {
    this.setState(state => ({
      opened: !state.opened,
      vat: this.props.vat,
    }));
  };

  updateVat = () => {
    this.props.onUpdateVat(this.state.vat);
  };

  prev = () => {
    this.setState(state => ({
      vat: Math.max(0, state.vat - 1),
    }));
  };

  next = () => {
    this.setState(state => ({
      vat: Math.min(100, state.vat + 1),
    }));
  };

  render() {
    return (
      <Wrapper>
        <DropdownButton opened={this.state.opened} onClick={this.toggleMenu}>
          VAT {this.props.vat} %
        </DropdownButton>
        {this.state.opened && (
          <DropdownContent>
            <DropdownContentTitle>VAT, %</DropdownContentTitle>
            <DropdownContentAction>
              <Button onClick={this.prev}>-</Button>
              <DropdownContentTitle>{this.state.vat}%</DropdownContentTitle>
              <Button onClick={this.next}>+</Button>
            </DropdownContentAction>
            <SaveButton onClick={this.updateVat}>SAVE</SaveButton>
          </DropdownContent>
        )}
      </Wrapper>
    );
  }
}

Vat.propTypes = {
  vat: PropTypes.number,
  onUpdateVat: PropTypes.func,
};

export default Vat;
