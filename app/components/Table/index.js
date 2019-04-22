import React from 'react';
import PropTypes from 'prop-types';
import Sort from 'components/Sort';
import AddColumn from 'components/AddColumn';
import Check from 'components/Check';
import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import Tr from './Tr';
import Th from './Th';
import Td from './Td';
import Tf from './Tf';
import Dropdown from './Dropdown';
import Input from './Input';
import Static from './Static';
import ModalDialog from './ModalDialog';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.data.header,
      body: props.data.body,
      modal: false,
      selectedItem: null,
    };
  }

  header = () =>
    this.state.header.map(element => (
      <Th align={element.align} key={element.name} width={element.width}>
        {element.name}
        <Sort value={element.sort} />
      </Th>
    ));

  format = (defaultValue, header) => {
    if (defaultValue === 0) {
      return '$0';
    }
    let value = defaultValue;
    if (header === 'salary' || header === 'total' || header === 'other') {
      const staticValue = Math.abs(value)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      value = value > 0 ? `$${staticValue}` : `-$${staticValue}`;
    }
    return value;
  };

  body = () =>
    this.state.body.map(bodyElement => (
      <Tr paddingLeft={38} key={bodyElement.id} className="table__tr">
        {this.state.header.map(element => (
          <Td
            align={element.align}
            key={element.name + bodyElement.id}
            width={element.width}
          >
            {element.type === 'static' && (
              <Static align={element.align}>
                {this.format(
                  bodyElement.salary + bodyElement.other,
                  element.name,
                )}
              </Static>
            )}
            {(element.type === 'text' || element.type === 'date') && (
              <Input
                value={this.format(bodyElement[element.name], element.name)}
                type="text"
                align={element.align}
                onChange={evt =>
                  this.props.changeValue(bodyElement.id, evt, element.name)
                }
              />
            )}
            {element.type === 'image' && (
              <Check value={bodyElement[element.name]} />
            )}
            {element.type === 'action' && (
              <Dropdown value="" onDelete={() => this.showModal(bodyElement)} />
            )}
          </Td>
        ))}
      </Tr>
    ));

  footer = type => {
    if (type === 'name') {
      return 'Total';
    }
    if (type === 'salary' || type === 'other') {
      let value = 0;
      for (let i = 0; i < this.state.body.length; i += 1) {
        value += this.state.body[i][type];
      }
      return this.format(value, type);
    }
    if (type === 'total') {
      let value = 0;
      for (let i = 0; i < this.state.body.length; i += 1) {
        value += this.state.body[i].salary + this.state.body[i].other;
      }
      return this.format(value, type);
    }
    return '';
  };

  footerContent = () =>
    this.state.header.map(element => (
      <Tf align={element.align} key={element.name} width={element.width}>
        {this.footer(element.name)}
      </Tf>
    ));

  showModal = element => {
    this.setState({
      modal: true,
      selectedItem: element,
    });
  };

  closeModal = () => {
    this.setState({
      modal: false,
      selectedItem: null,
    });
  };

  deleteItem = () => {
    this.setState(state => {
      const filterBody = state.body.filter(
        element => element.id !== state.selectedItem.id,
      );
      return {
        body: filterBody,
        modal: false,
        selectedItem: null,
      };
    });
  };

  render() {
    return (
      <Wrapper>
        {this.state.modal && (
          <Modal onClose={this.closeModal}>
            <ModalDialog
              element={this.state.selectedItem}
              onDelete={this.deleteItem}
              onClose={this.closeModal}
            />
          </Modal>
        )}
        <TableHeader>
          <Tr paddingLeft={50}>{this.header()}</Tr>
        </TableHeader>
        <TableBody>{this.body()}</TableBody>
        <AddColumn data={this.state.header} />
        <TableFooter>
          <Tr paddingLeft={50}>{this.footerContent()}</Tr>
        </TableFooter>
      </Wrapper>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object,
  changeValue: PropTypes.func,
};

export default Table;
