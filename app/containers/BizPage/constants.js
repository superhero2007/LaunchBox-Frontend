const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const createRequestTypes = base => {
  const res = {};
  // eslint-disable-next-line
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `app/Api/${base}_${type}`);
  return res;
};

export const GET_RECORDS_REQUEST = createRequestTypes('GET_RECORDS');
export const CREATE_RECORD_REQUEST = createRequestTypes('CREATE_RECORD');
export const UPDATE_RECORD_REQUEST = createRequestTypes('UPDATE_RECORD');
export const DELETE_RECORD_REQUEST = createRequestTypes('DELETE_RECORD');

export const GET_CATEGORIES_REQUEST = createRequestTypes('GET_CATEGORIES');
export const CREATE_CATEGORY_REQUEST = createRequestTypes('CREATE_CATEGORY');
export const UPDATE_CATEGORY_REQUEST = createRequestTypes('UPDATE_CATEGORY');
export const DELETE_CATEGORY_REQUEST = createRequestTypes('DELETE_CATEGORY');

export const SELECT_MONTH = 'app/App/SELECT_MONTH';
export const SELECT_CURRENCY = 'app/App/SELECT_CURRENCY';
export const UPDATE_VAT = 'app/App/UPDATE_VAT';
