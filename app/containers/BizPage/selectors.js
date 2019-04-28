import { createSelector } from 'reselect';

const selectBiz = state => state.get('biz');

const makeSelectRecords = () =>
  createSelector(selectBiz, bizState => bizState.get('records').toJS());

const makeSelectCategories = () =>
  createSelector(selectBiz, bizState => bizState.get('categories').toJS());

const makeSelectMonth = () =>
  createSelector(selectBiz, bizState => bizState.get('month'));

const makeSelectCurrencies = () =>
  createSelector(selectBiz, bizState => bizState.get('currencies').toJS());

const makeSelectCurrency = () =>
  createSelector(selectBiz, bizState => bizState.get('currency'));

const makeSelectVAT = () =>
  createSelector(selectBiz, bizState => bizState.get('vat'));

export {
  selectBiz,
  makeSelectRecords,
  makeSelectCategories,
  makeSelectMonth,
  makeSelectCurrencies,
  makeSelectCurrency,
  makeSelectVAT,
};
