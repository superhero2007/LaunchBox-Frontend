import React from 'react';
import Wrapper from './Wrapper';
import DropdownButton from './DropdownButton';
import DropdownContent from './DropdownContent';
import DropdownElementWrapper from './DropdownElementWrapper';
import DropdownElement from './DropdownElement';
import DropdownSearchWrapper from './DropdownSearchWrapper';
import DropdownSearchIcon from './DropdownSearchIcon';
import DropdownSearch from './DropdownSearch';

class Vat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  toggleMenu = () => {
    this.setState(state => ({
      opened: !state.opened,
    }));
  };

  render() {
    return (
      <Wrapper>
        <DropdownButton opened={this.state.opened} onClick={this.toggleMenu}>
          VAT 24%
        </DropdownButton>
        {this.state.opened && (
          <DropdownContent>
            <DropdownSearchWrapper>
              <DropdownSearchIcon className="fas fa-search" />
              <DropdownSearch placeholder="Search" />
            </DropdownSearchWrapper>
            <DropdownElementWrapper>
              <DropdownElement>USD, US Dollar, $</DropdownElement>
              <DropdownElement>EUR, Euro, €</DropdownElement>
              <DropdownElement>GBP, British Pound, £</DropdownElement>
              <DropdownElement>AUD, Australian Dollar, $</DropdownElement>
              <DropdownElement>CAD, Canadian Dollar, $</DropdownElement>
            </DropdownElementWrapper>
          </DropdownContent>
        )}
      </Wrapper>
    );
  }
}

export default Vat;
