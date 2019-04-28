import React from 'react';
import PropTypes from 'prop-types';
import Td from 'components/Table/Td';
import Primary from 'components/Button/Primary';
import Secondary from 'components/Button/Secondary';
import Input from './Input';
import Wrapper from './Wrapper';
import AddNewButton from './AddNewButton';
import Check from './Check';
import DateIcon from './DateIcon';
import ButtonWrapper from './ButtonWrapper';

class AddColumn extends React.Component {
  constructor(props) {
    super(props);
    const value = {};
    props.data.forEach(element => {
      if (element.type === 'text' || element.type === 'date') {
        value[element.name] = '';
      }
      if (element.type === 'image') {
        value[element.name] = true;
      }
    });
    this.state = {
      addingStatus: false,
      value,
    };
  }

  updateAddingStatus = e => {
    e.preventDefault();
    this.setState(state => ({
      addingStatus: !state.addingStatus,
    }));
  };

  handleCreate = e => {
    e.preventDefault();
    this.setState(state => ({
      addingStatus: !state.addingStatus,
    }));
    this.props.onCreate(this.state.value);
  };

  changeValue = (value, name) => {
    let updatedValue = value;
    if (name === 'salary' || name === 'other') {
      updatedValue = parseFloat(updatedValue);
    }
    this.state.value[name] = updatedValue;
  };

  addColumn = () => {
    if (!this.state.addingStatus) {
      return (
        <AddNewButton onClick={this.updateAddingStatus}>ADD NEW +</AddNewButton>
      );
    }
    return this.props.data.map(element => (
      <Td align={element.align} key={element.name} width={element.width}>
        {element.type === 'date' && <DateIcon className="far fa-calendar" />}
        {(element.type === 'text' || element.type === 'date') && (
          <Input
            placeholder={element.placeholder}
            align={element.align}
            value={this.state.value[element.name]}
            paddingLeft={element.type === 'date' ? 30 : 12}
            onChange={value => this.changeValue(value, element.name)}
          />
        )}
        {element.type === 'image' && (
          <Check
            value={this.state.value[element.name]}
            onClick={value => this.changeValue(value, element.name)}
          />
        )}
        {element.type === 'action' && (
          <ButtonWrapper>
            <Primary onClick={this.handleCreate}>Add</Primary>
            <Secondary onClick={this.updateAddingStatus}>Clear</Secondary>
          </ButtonWrapper>
        )}
      </Td>
    ));
  };

  render() {
    return <Wrapper>{this.addColumn()}</Wrapper>;
  }
}

AddColumn.propTypes = {
  data: PropTypes.array,
  onCreate: PropTypes.func,
};

export default AddColumn;
