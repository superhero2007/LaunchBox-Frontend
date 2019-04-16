import React from 'react';
import PropTypes from 'prop-types';
import Sort from 'components/Sort';
import Dropdown from 'components/Dropdown';
import AddColumn from 'components/AddColumn';
import Check from 'components/Check';
import Wrapper from './Wrapper';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import Tr from './Tr';
import Th from './Th';
import Td from './Td';
import Tf from './Tf';
import Input from './Input';

class Table extends React.Component {
  header = () =>
    this.props.data.header.map(element => (
      <Th align={element.align} key={element.name} width={element.width}>
        {element.name}
        <Sort value={element.sort} />
      </Th>
    ));

  body = () =>
    this.props.data.body.map(bodyElement => (
      <Tr paddingLeft={38} key={bodyElement.id}>
        {this.props.data.header.map(element => (
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
            {element.type === 'action' && <Dropdown value="" />}
          </Td>
        ))}
      </Tr>
    ));

  footer = () =>
    this.props.data.header.map(element => (
      <Tf align={element.align} key={element.name} width={element.width}>
        {element.footer && element.footer}
      </Tf>
    ));

  render() {
    return (
      <Wrapper>
        <TableHeader>
          <Tr paddingLeft={50}>{this.header()}</Tr>
        </TableHeader>
        <TableBody>{this.body()}</TableBody>
        <AddColumn data={this.props.data.header} />
        <TableFooter>
          <Tr paddingLeft={50}>{this.footer()}</Tr>
        </TableFooter>
      </Wrapper>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object,
};

export default Table;
