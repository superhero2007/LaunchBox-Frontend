import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import DropdownButton from './DropdownButton';
import DropdownContent from './DropdownContent';
import DropdownElementWrapper from './DropdownElementWrapper';
import DropdownElement from './DropdownElement';
import DropdownSearchWrapper from './DropdownSearchWrapper';
import DropdownSearchIcon from './DropdownSearchIcon';
import DropdownSearch from './DropdownSearch';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      selectedCash: props.selectedCash,
      currencyList: props.currencyList,
    };
  }

  toggleMenu = () => {
    this.setState(state => ({
      opened: !state.opened,
    }));
  };

  selectCurrency = id => {
    this.setState(state => ({
      opened: !state.opened,
      selectedCash: id,
    }));
    this.props.onSelectCurrency(id);
  };

  showCurrencies = () =>
    this.state.currencyList.map(element => (
      <DropdownElement
        key={element.value}
        onClick={() => this.selectCurrency(element.id)}
      >
        {element.label}
      </DropdownElement>
    ));

  render() {
    return (
      <Wrapper>
        <DropdownButton opened={this.state.opened} onClick={this.toggleMenu}>
          {
            this.state.currencyList.find(
              value => value.id === this.state.selectedCash,
            ).value
          }
        </DropdownButton>
        {this.state.opened && (
          <DropdownContent>
            <DropdownSearchWrapper>
              <DropdownSearchIcon className="fas fa-search" />
              <DropdownSearch placeholder="Search" />
            </DropdownSearchWrapper>
            <DropdownElementWrapper>
              {this.showCurrencies()}
            </DropdownElementWrapper>
          </DropdownContent>
        )}
      </Wrapper>
    );
  }
}

Currency.propTypes = {
  selectedCash: PropTypes.number,
  currencyList: PropTypes.array,
  onSelectCurrency: PropTypes.func,
};

export default Currency;
