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
import SubHeader from 'components/SubHeader';
import Table from 'components/Table';
import Footer from 'components/Footer';

/* eslint-disable react/prefer-stateless-function */
export default class BizPage extends React.PureComponent {
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
            footer: 'Total',
            placeholder: 'Name',
          },
          {
            name: 'salary',
            align: 'right',
            type: 'text',
            sort: -1,
            width: '10%',
            footer: '-$29,350.00',
            placeholder: 'Salary, $',
          },
          {
            name: 'other',
            align: 'right',
            type: 'text',
            sort: 0,
            width: '10%',
            footer: '$0',
            placeholder: 'Other, $',
          },
          {
            name: 'total',
            align: 'right',
            type: 'text',
            sort: 0,
            width: '10%',
            footer: '-$29,350.00',
            placeholder: 'Total, $',
          },
          {
            name: 'vat',
            align: 'center',
            type: 'image',
            sort: 0,
            width: '10%',
            footer: false,
            placeholder: '',
          },
          {
            name: 'due date',
            align: 'left',
            type: 'date',
            sort: 0,
            width: '10%',
            footer: false,
            placeholder: 'Due Date',
          },
          {
            name: 'billed',
            align: 'center',
            type: 'image',
            sort: 0,
            width: '10%',
            footer: false,
            placeholder: '',
          },
          {
            name: 'paid',
            align: 'center',
            type: 'image',
            sort: 0,
            width: '10%',
            footer: false,
            placeholder: '',
          },
          {
            name: 'action',
            align: 'right',
            type: 'action',
            sort: 0,
            width: '10%',
            footer: false,
            placeholder: '',
          },
        ],
        body: [
          {
            id: 1,
            name: 'Alberto Conti',
            salary: '-$4,500.00',
            other: '$0',
            total: '-$4,500.00',
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: true,
            action: true,
          },
          {
            id: 2,
            name: 'Roma Melnik',
            salary: '-$5,600.00',
            other: '$0',
            total: '-$5,600.00',
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: false,
            action: true,
          },
          {
            id: 3,
            name: 'Cristian Dragos',
            salary: '-$6,750.00',
            other: '$0',
            total: '-$6,750.00',
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: true,
            action: true,
          },
          {
            id: 4,
            name: 'Eugen Ciachir',
            salary: '-$4,500.00',
            other: '$0',
            total: '-$4,500.00',
            vat: false,
            'due date': '25.05.2019',
            billed: true,
            paid: false,
            action: true,
          },
          {
            id: 5,
            name: 'Blane Fraser',
            salary: '-$3,500.00',
            other: '$0',
            total: '-$3,500.00',
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: false,
            action: true,
          },
          {
            id: 6,
            name: 'Jay Fletcher',
            salary: '-$4,500.00',
            other: '$0',
            total: '-$4,500.00',
            vat: true,
            'due date': '25.05.2019',
            billed: true,
            paid: true,
            action: true,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <SubHeader
          title="Employees"
          value="-$29,350.00"
          color="#e37898"
          opened
        />
        <Table data={this.state.table} />
        <SubHeader title="Contractors" value="-$29,350.00" color="#e37898" />
        <SubHeader
          title="Recurring Payments"
          value="-$29,350.00"
          color="#27C478"
        />
        <SubHeader title="VAT" value="-$29,350.00" color="#e37898" />
        <SubHeader new />
        <Footer />
      </div>
    );
  }
}
