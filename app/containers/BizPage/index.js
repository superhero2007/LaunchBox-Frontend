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
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Category from 'components/Category';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';
import Add from './Add';
import AddWrapper from './AddWrapper';
import { getRecords, getCategories, createCategory } from './actions';
import {
  makeSelectRecords,
  makeSelectCategories,
  makeSelectMonth,
  makeSelectCurrencies,
  makeSelectCurrency,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ModalDialog from './ModalDialog';

/* eslint-disable react/prefer-stateless-function */
class BizPage extends React.PureComponent {
  constructor(props) {
    super(props);
    const currency = props.currencies.find(
      element => element.id === props.currency,
    );
    const currencyLabel = currency.label.slice(-1);
    this.state = {
      header: [
        {
          name: 'name',
          align: 'left',
          type: 'text',
          sort: 0,
          width: '20%',
          placeholder: 'Name',
        },
        {
          name: 'salary',
          align: 'right',
          type: 'text',
          sort: 0,
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
          name: 'due_date',
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
      body: props.records,
      categories: props.categories.filter(
        category => category.month === props.month,
      ),
      month: props.month,
      modal: false,
      currencyLabel,
    };
  }

  componentDidMount() {
    this.props.onLoadRecords();
    this.props.onLoadCategories();
  }

  componentWillReceiveProps(nextProps) {
    const currency = nextProps.currencies.find(
      element => element.id === nextProps.currency,
    );
    const currencyLabel = currency.label.slice(-1);
    this.setState({
      body: nextProps.records,
      categories: nextProps.categories.filter(
        category => category.month === nextProps.month,
      ),
      month: nextProps.month,
      currencyLabel,
    });
  }

  monthBalance = () => {
    let value = 0;
    for (let i = 0; i < this.state.body.length; i += 1) {
      value += this.state.body[i].salary + this.state.body[i].other;
    }
    return this.format(value);
  };

  allBalance = () => {
    let value = 0;
    for (let i = 0; i < this.state.body.length; i += 1) {
      value += this.state.body[i].salary + this.state.body[i].other;
    }
    return this.format(value);
  };

  format = defaultValue => {
    if (defaultValue === 0) {
      return this.state.currencyLabel + 0;
    }
    let value = defaultValue;
    const staticValue = Math.abs(value)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    value =
      value > 0
        ? `${this.state.currencyLabel}${staticValue}`
        : `-${this.state.currencyLabel}${staticValue}`;
    return value;
  };

  getRecords = categoryId => {
    const selectedDate = {
      year: parseInt(this.state.month.split('-')[0], 10),
      month: parseInt(this.state.month.split('-')[1], 10),
    };
    return this.state.body.filter(record => {
      const recordDate = {
        year: parseInt(record.due_date.split('-')[0], 10),
        month: parseInt(record.due_date.split('-')[1], 10),
      };
      return (
        record.category_id === categoryId &&
        recordDate.year === selectedDate.year &&
        recordDate.month === selectedDate.month
      );
    });
  };

  categoryList = () =>
    this.state.categories.map((element, index) => (
      <div key={`category${element.id}`}>
        <Category
          category={element}
          opened={index === 0}
          header={this.state.header}
          body={this.getRecords(element.id)}
        />
      </div>
    ));

  showModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  onSelect = title => {
    this.setState({ modal: false });
    this.props.onCreateCategory({
      title,
      color: '#e37898',
      month: this.state.month,
    });
  };

  render() {
    if (this.state.modal) {
      return (
        <div>
          <Header route={this.props.location.pathname} />
          <ModalDialog onClose={this.closeModal} onSelect={this.onSelect} />
        </div>
      );
    }

    return (
      <div>
        <Header route={this.props.location.pathname} />
        <Wrapper>
          {this.categoryList()}
          <AddWrapper>
            <Add onClick={this.showModal}>Add category</Add>
          </AddWrapper>
        </Wrapper>
        <Footer balance={this.monthBalance()} cash={this.allBalance()} />
      </div>
    );
  }
}

BizPage.propTypes = {
  location: PropTypes.object,
  records: PropTypes.array,
  categories: PropTypes.array,
  month: PropTypes.string,
  currency: PropTypes.number,
  currencies: PropTypes.array,
  onLoadRecords: PropTypes.func,
  onLoadCategories: PropTypes.func,
  onCreateCategory: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  records: makeSelectRecords(),
  categories: makeSelectCategories(),
  month: makeSelectMonth(),
  currencies: makeSelectCurrencies(),
  currency: makeSelectCurrency(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadRecords: () => dispatch(getRecords.request()),
    onLoadCategories: () => dispatch(getCategories.request()),
    onCreateCategory: category => dispatch(createCategory.request(category)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'biz', reducer });
const withSaga = injectSaga({ key: 'biz', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BizPage);
