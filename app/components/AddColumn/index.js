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
    this.state = {
      addingStatus: false,
    };
  }

  updateAddingStatus = e => {
    e.preventDefault();
    this.setState(state => ({
      addingStatus: !state.addingStatus,
    }));
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
            type="text"
            align={element.align}
            paddingLeft={element.type === 'date' ? 30 : 12}
          />
        )}
        {element.type === 'image' && <Check />}
        {element.type === 'action' && (
          <ButtonWrapper>
            <Primary onClick={this.updateAddingStatus}>Add</Primary>
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
};

export default AddColumn;
