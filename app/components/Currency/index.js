import React from 'react';
import Wrapper from './Wrapper';
import DropdownButton from './DropdownButton';
import DropdownContent from './DropdownContent';
import DropdownElement from './DropdownElement';
import DropdownSearch from './DropdownSearch';

class Currency extends React.Component {
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
          USD $
        </DropdownButton>
        {this.state.opened && (
          <DropdownContent>
            <DropdownSearch placeholder="Search" />
            <DropdownElement>Rename</DropdownElement>
            <DropdownElement>Duplicate</DropdownElement>
            <DropdownElement>Delete</DropdownElement>
          </DropdownContent>
        )}
      </Wrapper>
    );
  }
}

export default Currency;
