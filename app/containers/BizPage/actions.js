import {
  GET_RECORDS_REQUEST,
  CREATE_RECORD_REQUEST,
  UPDATE_RECORD_REQUEST,
  DELETE_RECORD_REQUEST,
  GET_CATEGORIES_REQUEST,
  CREATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  CREATE_MONTH_REQUEST,
  SELECT_MONTH,
  SELECT_CURRENCY,
  UPDATE_VAT,
} from './constants';

function action(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

/*
 * GET RECORDS
 */

export const getRecords = {
  request: () => action(GET_RECORDS_REQUEST.REQUEST),
  success: response => action(GET_RECORDS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_RECORDS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE RECORD
 */

export const createRecord = {
  request: record => action(CREATE_RECORD_REQUEST.REQUEST, { record }),
  success: response => action(CREATE_RECORD_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_RECORD_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE RECORD
 */

export const updateRecord = {
  request: record => action(UPDATE_RECORD_REQUEST.REQUEST, { record }),
  success: response => action(UPDATE_RECORD_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_RECORD_REQUEST.FAILURE, { error }),
};

/*
 * DELETE RECORD
 */

export const deleteRecord = {
  request: id => action(DELETE_RECORD_REQUEST.REQUEST, { id }),
  success: response => action(DELETE_RECORD_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_RECORD_REQUEST.FAILURE, { error }),
};

/*
 * GET CATEGORIES
 */

export const getCategories = {
  request: () => action(GET_CATEGORIES_REQUEST.REQUEST),
  success: response => action(GET_CATEGORIES_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_CATEGORIES_REQUEST.FAILURE, { error }),
};

/*
 * CREATE CATEGORY
 */

export const createCategory = {
  request: category => action(CREATE_CATEGORY_REQUEST.REQUEST, { category }),
  success: response => action(CREATE_CATEGORY_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_CATEGORY_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE CATEGORY
 */

export const updateCategory = {
  request: category => action(UPDATE_CATEGORY_REQUEST.REQUEST, { category }),
  success: response => action(UPDATE_CATEGORY_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_CATEGORY_REQUEST.FAILURE, { error }),
};

/*
 * DELETE CATEGORY
 */

export const deleteCategory = {
  request: id => action(DELETE_CATEGORY_REQUEST.REQUEST, { id }),
  success: response => action(DELETE_CATEGORY_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_CATEGORY_REQUEST.FAILURE, { error }),
};

/*
* Create Month
*/

export const createMonth = {
  request: month => action(CREATE_MONTH_REQUEST.REQUEST, { month }),
  success: response => action(CREATE_MONTH_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_MONTH_REQUEST.FAILURE, { error }),
};

/*
 * SELECT MONTH, CURRENCY & VAT
 */

export const selectMonth = month => action(SELECT_MONTH, { month });
export const selecCurrency = currency => action(SELECT_CURRENCY, { currency });
export const updateVat = vat => action(UPDATE_VAT, { vat });
