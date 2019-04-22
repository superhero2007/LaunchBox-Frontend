/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from 'components/SubHeader';
import Table from 'components/Table';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';
import Add from './Add';
import AddWrapper from './AddWrapper';

/* eslint-disable react/prefer-stateless-function */
class BizPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      table: {
        header: [
          {
            name: 'name',
            align: 'left',
            type: 'text',
            sort: 1,
            width: '20%',
            placeholder: 'Name',
          },
          {
            name: 'salary',
            align: 'right',
            type: 'text',
            sort: -1,
            width: '10%',
            placeholder: 'Salary, $',
          },
          {
            name: 'other',
            align: 'right',
            type: 'text',
            sort: 0,
            width: '10%',
            placeholder: 'Other, $',
          },
          {
            name: 'total',
            align: 'right',
            type: 'static',
            sort: 0,
            width: '10%',
            placeholder: 'Total, $',
          },
          {
            name: 'vat',
            align: 'center',
            type: 'image',
            sort: 0,
            width: '10%',
            placeholder: '',
          },
          {
            name: 'due date',
            align: 'left',
            type: 'date',
            sort: 0,
            width: '10%',
            placeholder: 'Due Date',
          },
          {
            name: 'billed',
            align: 'center',
            type: 'image',
            sort: 0,
            width: '10%',
            placeholder: '',
          },
          {
            name: 'paid',
            align: 'center',
            type: 'image',
            sort: 0,
            width: '10%',
            placeholder: '',
          },
          {
            name: 'action',
            align: 'right',
            type: 'action',
            sort: 0,
            width: '10%',
            placeholder: '',
          },
        ],
        body: [
          {
            id: 1,
            name: 'Alberto Conti',
            salary: -4500,
            other: 0,
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: true,
            action: true,
          },
          {
            id: 2,
            name: 'Roma Melnik',
            salary: -5600,
            other: 0,
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: false,
            action: true,
          },
          {
            id: 3,
            name: 'Cristian Dragos',
            salary: -6750,
            other: 0,
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: true,
            action: true,
          },
          {
            id: 4,
            name: 'Eugen Ciachir',
            salary: -4500,
            other: 0,
            vat: false,
            'due date': '25.05.2019',
            billed: true,
            paid: false,
            action: true,
          },
          {
            id: 5,
            name: 'Blane Fraser',
            salary: -3500,
            other: 0,
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: false,
            action: true,
          },
          {
            id: 6,
            name: 'Jay Fletcher',
            salary: -4500,
            other: 0,
            total: -4500,
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: true,
            action: true,
          },
        ],
      },
      subHeader: [
        {
          title: 'Employees',
          value: '-$29,350.00',
          color: '#e37898',
          opened: true,
        },
        {
          title: 'Contractors',
          value: '-$29,350.00',
          color: '#e37898',
          opened: false,
        },
        {
          title: 'Recurring Payments',
          value: '-$29,350.00',
          color: '#27C478',
          opened: false,
        },
        {
          title: 'VAT',
          value: '-$29,350.00',
          color: '#e37898',
          opened: false,
        },
      ],
    };
  }

  total = () => {
    let value = 0;
    for (let i = 0; i < this.state.table.body.length; i += 1) {
      value += this.state.table.body[i].salary + this.state.table.body[i].other;
    }
    return this.format(value);
  };

  format = defaultValue => {
    if (defaultValue === 0) {
      return '$0';
    }
    let value = defaultValue;
    const staticValue = Math.abs(value)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    value = value > 0 ? `$${staticValue}` : `-$${staticValue}`;
    return value;
  };

  toggleElement = selected => {
    this.setState(state => {
      const subHeader = state.subHeader.slice(0);
      const filterItem = subHeader.find(
        element => element.title === selected.title,
      );
      filterItem.opened = !filterItem.opened;
      return { subHeader };
    });
  };

  updateValue = (id, value, column) => {
    const updatedValue = value.target.value.replace(/[,$]+/g, '');
    this.setState(state => {
      const tableBody = state.table.body.slice(0);
      const filterItem = tableBody.find(element => element.id === id);
      filterItem[column] = parseFloat(updatedValue);
      return {
        table: {
          head: state.table.head,
          body: tableBody,
        },
      };
    });
  };

  tableList = () =>
    this.state.subHeader.map(element => (
      <div key={element.title}>
        <SubHeader
          title={element.title}
          value={this.total()}
          color={element.color}
          opened={element.opened}
          toggle={() => this.toggleElement(element)}
        />
        {element.opened && (
          <Table data={this.state.table} changeValue={this.updateValue} />
        )}
      </div>
    ));

  render() {
    return (
      <div>
        <Header route={this.props.location.pathname} />
        <Wrapper>
          {this.tableList()}
          <AddWrapper>
            <Add>Add category</Add>
          </AddWrapper>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

BizPage.propTypes = {
  location: PropTypes.object,
};

export default BizPage;
