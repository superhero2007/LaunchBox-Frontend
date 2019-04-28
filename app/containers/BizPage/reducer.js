import { fromJS } from 'immutable';

import {
  GET_RECORDS_REQUEST,
  CREATE_RECORD_REQUEST,
  UPDATE_RECORD_REQUEST,
  DELETE_RECORD_REQUEST,
  GET_CATEGORIES_REQUEST,
  CREATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  SELECT_MONTH,
  SELECT_CURRENCY,
  UPDATE_VAT,
} from './constants';

export const initialState = fromJS({
  records: [],
  categories: [],
  month: '2019-05',
  currency: 1,
  currencies: [
    {
      id: 1,
      label: 'USD, US Dollar, $',
      value: 'USD $',
    },
    {
      id: 2,
      label: 'EUR, Euro, €',
      value: 'EUR €',
    },
    {
      id: 3,
      label: 'GBP, British Pound, £',
      value: 'GBP £',
    },
    {
      id: 4,
      label: 'AUD, Australian Dollar, $',
      value: 'AUD $',
    },
    {
      id: 5,
      label: 'CAD, Canadian Dollar, $',
      value: 'CAD $',
    },
  ],
  vat: 24,
});

function BizReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECORDS_REQUEST.SUCCESS:
      return state.set('records', fromJS(action.response.records));
    case CREATE_RECORD_REQUEST.SUCCESS:
      return state.update('records', records =>
        records.push(action.response.record),
      );
    case UPDATE_RECORD_REQUEST.SUCCESS:
      return state.update('records', records => {
        const elements = records.toJS();
        const index = elements.findIndex(
          element => element.id === action.response.record.id,
        );
        elements[index] = action.response.record;
        return fromJS(elements);
      });
    case DELETE_RECORD_REQUEST.SUCCESS:
      return state.update('records', records =>
        fromJS(
          records.toJS().filter(record => record.id !== action.response.id),
        ),
      );
    case GET_CATEGORIES_REQUEST.SUCCESS:
      return state.set('categories', fromJS(action.response.categories));
    case CREATE_CATEGORY_REQUEST.SUCCESS:
      return state.update('categories', categories =>
        categories.push(action.response.category),
      );
    case UPDATE_CATEGORY_REQUEST.SUCCESS:
      return state.update('categories', categories => {
        const elements = categories.toJS();
        const index = elements.findIndex(
          element => element.id === action.response.record.id,
        );
        elements[index] = action.response.record;
        return fromJS(elements);
      });
    case DELETE_CATEGORY_REQUEST.SUCCESS:
      return state.update('categories', categories =>
        fromJS(
          categories
            .toJS()
            .filter(category => category.id !== action.response.id),
        ),
      );
    case SELECT_MONTH:
      return state.set('month', action.month);
    case SELECT_CURRENCY:
      return state.set('currency', action.currency);
    case UPDATE_VAT:
      return state.set('vat', action.vat);
    default:
      return state;
  }
}

export default BizReducer;
