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

  body = () =>
    this.state.body.map(bodyElement => (
      <Tr paddingLeft={38} key={bodyElement.id}>
        {this.state.header.map(element => (
          <Td
            align={element.align}
            key={element.name + bodyElement.id}
            width={element.width}
          >
            {(element.type === 'text' || element.type === 'date') && (
              <Input
                defaultValue={bodyElement[element.name]}
                type="text"
                align={element.align}
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

  footerContent = () =>
    this.state.header.map(element => (
      <Tf align={element.align} key={element.name} width={element.width}>
        {element.footer && element.footer}
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
};

export default Table;
