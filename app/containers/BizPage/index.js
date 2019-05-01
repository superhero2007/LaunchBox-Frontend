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
import {
  getRecords,
  getCategories,
  createCategory,
  createMonth,
} from './actions';
import {
  makeSelectRecords,
  makeSelectCategories,
  makeSelectMonth,
  makeSelectCurrencies,
  makeSelectCurrency,
  makeSelectVAT,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ModalDialog from './ModalDialog';
import MonthWrapper from './MonthWrapper';
import NewMonth from './NewMonth';
import DuplicateMonth from './DuplicateMonth';

/* eslint-disable react/prefer-stateless-function */
class BizPage extends React.PureComponent {
  constructor(props) {
    super(props);
    const currency = props.currencies.find(
      element => element.id === props.currency,
    );
    const currencyLabel = currency.label.slice(-1);
    const categories = props.categories.filter(
      category => category.month === props.month,
    );
    let emptyDialog = false;
    if (!categories.length) {
      emptyDialog = true;
    }
    this.state = {
      body: props.records,
      categories,
      month: props.month,
      addCategory: false,
      emptyDialog,
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
    const categories = nextProps.categories.filter(
      category => category.month === nextProps.month,
    );
    let emptyDialog = false;
    if (!categories.length) {
      emptyDialog = true;
    }
    this.setState({
      body: nextProps.records,
      categories,
      month: nextProps.month,
      currencyLabel,
      emptyDialog,
    });
  }

  monthBalance = () => {
    let value = 0;
    for (let i = 0; i < this.state.body.length; i += 1) {
      const selectedCategory = this.props.categories.find(
        category => category.id === this.state.body[i].category_id,
      );
      if (
        selectedCategory.title === 'Recurring Payments' ||
        selectedCategory.title === 'Project Based'
      ) {
        value += this.state.body[i].salary * (1 + this.props.vat / 100);
      } else {
        value += this.state.body[i].salary + this.state.body[i].other;
      }
    }
    return this.format(value);
  };

  allBalance = () => {
    let value = 0;
    for (let i = 0; i < this.state.body.length; i += 1) {
      const selectedCategory = this.props.categories.find(
        category => category.id === this.state.body[i].category_id,
      );
      if (
        selectedCategory.title === 'Recurring Payments' ||
        selectedCategory.title === 'Project Based'
      ) {
        value += this.state.body[i].salary * (1 + this.props.vat / 100);
      } else {
        value += this.state.body[i].salary + this.state.body[i].other;
      }
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
          body={this.getRecords(element.id)}
        />
      </div>
    ));

  showAddCategory = () => {
    this.setState({ addCategory: true });
  };

  closeAddCategory = () => {
    this.setState({ addCategory: false });
  };

  onSelect = title => {
    this.setState({ addCategory: false });
    this.props.onCreateCategory({
      title,
      color: '#e37898',
      month: this.state.month,
    });
  };

  hideEmpty = () => {
    this.setState({ emptyDialog: false });
  };

  duplicateMonth = () => {
    this.setState({ emptyDialog: false });
    this.props.onDuplicateMonth(this.props.month);
  };

  render() {
    if (this.state.emptyDialog) {
      return (
        <div>
          <Header route={this.props.location.pathname} />
          <MonthWrapper>
            <NewMonth onClick={this.hideEmpty} />
            <DuplicateMonth onClick={this.duplicateMonth} />
          </MonthWrapper>
          <Footer balance={this.monthBalance()} cash={this.allBalance()} />
        </div>
      );
    }

    if (this.state.addCategory) {
      return (
        <div>
          <Header route={this.props.location.pathname} />
          <ModalDialog
            onClose={this.closeAddCategory}
            onSelect={this.onSelect}
          />
        </div>
      );
    }

    return (
      <div>
        <Header route={this.props.location.pathname} />
        <Wrapper>
          {this.categoryList()}
          <AddWrapper>
            <Add onClick={this.showAddCategory}>Add category</Add>
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
  vat: PropTypes.number,
  onLoadRecords: PropTypes.func,
  onLoadCategories: PropTypes.func,
  onCreateCategory: PropTypes.func,
  onDuplicateMonth: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  records: makeSelectRecords(),
  categories: makeSelectCategories(),
  month: makeSelectMonth(),
  currencies: makeSelectCurrencies(),
  currency: makeSelectCurrency(),
  vat: makeSelectVAT(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadRecords: () => dispatch(getRecords.request()),
    onLoadCategories: () => dispatch(getCategories.request()),
    onCreateCategory: category => dispatch(createCategory.request(category)),
    onDuplicateMonth: month => dispatch(createMonth.request(month)),
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
