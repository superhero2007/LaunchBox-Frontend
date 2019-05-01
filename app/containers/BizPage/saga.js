/* eslint-disable prefer-destructuring */
/**
 * Gets the records
 */

import {
  all,
  call,
  take,
  put,
  takeLatest,
  actionChannel,
} from 'redux-saga/effects';
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
} from './constants';
import {
  getRecords,
  createRecord,
  updateRecord,
  deleteRecord,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  createMonth,
} from './actions';

let records = [
  {
    id: 1,
    name: 'Alberto Conti',
    salary: -4500,
    other: 0,
    vat: true,
    due_date: '2019-05-25',
    billed: true,
    paid: true,
    category_id: 1,
  },
  {
    id: 2,
    name: 'Roma Melnik',
    salary: -5600,
    other: 0,
    vat: true,
    due_date: '2019-05-25',
    billed: true,
    paid: false,
    category_id: 1,
  },
  {
    id: 3,
    name: 'Cristian Dragos',
    salary: -6750,
    other: 0,
    vat: true,
    due_date: '2019-05-25',
    billed: true,
    paid: true,
    category_id: 1,
  },
  {
    id: 4,
    name: 'Eugen Ciachir',
    salary: -4500,
    other: 0,
    vat: false,
    due_date: '2019-05-25',
    billed: true,
    paid: false,
    category_id: 1,
  },
  {
    id: 5,
    name: 'Blane Fraser',
    salary: -3500,
    other: 0,
    vat: true,
    due_date: '2019-05-25',
    billed: true,
    paid: false,
    category_id: 1,
  },
  {
    id: 6,
    name: 'Jay Fletcher',
    salary: -4500,
    other: 0,
    vat: true,
    due_date: '2019-05-25',
    billed: true,
    paid: true,
    category_id: 1,
  },
  {
    id: 7,
    name: 'Alberto Conti',
    salary: -4500,
    other: 0,
    vat: true,
    due_date: '2019-04-25',
    billed: true,
    paid: true,
    category_id: 2,
  },
  {
    id: 8,
    name: 'Roma Melnik',
    salary: -5600,
    other: 0,
    vat: true,
    due_date: '2019-04-25',
    billed: true,
    paid: false,
    category_id: 2,
  },
  {
    id: 9,
    name: 'Cristian Dragos',
    salary: -6750,
    other: 0,
    vat: true,
    due_date: '2019-04-25',
    billed: true,
    paid: true,
    category_id: 2,
  },
  {
    id: 10,
    name: 'Eugen Ciachir',
    salary: -4500,
    other: 0,
    vat: false,
    due_date: '2019-04-25',
    billed: true,
    paid: false,
    category_id: 2,
  },
  {
    id: 11,
    name: 'Blane Fraser',
    salary: -3500,
    other: 0,
    vat: true,
    due_date: '2019-04-25',
    billed: true,
    paid: false,
    category_id: 2,
  },
  {
    id: 12,
    name: 'Jay Fletcher',
    salary: -4500,
    other: 0,
    vat: true,
    due_date: '2019-04-25',
    billed: true,
    paid: true,
    category_id: 2,
  },
];

let categories = [
  {
    id: 1,
    title: 'Employees',
    color: '#e37898',
    month: '2019-05',
  },
  {
    id: 2,
    title: 'Contractors',
    color: '#e37898',
    month: '2019-04',
  },
  {
    id: 3,
    title: 'Recurring Payments',
    color: '#27C478',
    month: '2019-05',
  },
  {
    id: 4,
    title: 'VAT',
    color: '#e37898',
    month: '2019-04',
  },
];

/**
 * Get Records request/response handler
 */
export function* getRecordsRequest() {
  try {
    yield put(getRecords.success({ records }));
  } catch (err) {
    yield put(getRecords.failure(err));
  }
}

/**
 * Create Record request/response handler
 */
export function* createRecordRequest(action) {
  try {
    const record = Object.assign({}, action.record);
    record.id = 1;
    if (records.length) {
      record.id = Math.max(...records.map(element => element.id)) + 1;
    }
    records.push(record);
    yield put(createRecord.success({ record }));
  } catch (error) {
    yield put(createRecord.failure(error));
  }
}

/**
 * Update Record request/response handler
 */
export function* updateRecordRequest(action) {
  try {
    const record = Object.assign({}, action.record);
    const index = records.findIndex(element => element.id === action.record.id);
    records[index] = record;
    yield put(updateRecord.success({ record }));
  } catch (error) {
    yield put(updateRecord.failure(error));
  }
}

/**
 * Delete Record request/response handler
 */
export function* deleteRecordRequest(action) {
  try {
    records = records.filter(record => record.id !== action.id);
    yield put(deleteRecord.success({ id: action.id }));
  } catch (error) {
    yield put(deleteRecord.failure(error));
  }
}

export function* watchFetchRecords() {
  const subChannel = yield actionChannel(GET_RECORDS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getRecordsRequest, action);
  }
}

export function* watchCreateRecord() {
  yield takeLatest(CREATE_RECORD_REQUEST.REQUEST, createRecordRequest);
}

export function* watchUpdateRecord() {
  yield takeLatest(UPDATE_RECORD_REQUEST.REQUEST, updateRecordRequest);
}

export function* watchDeleteRecord() {
  yield takeLatest(DELETE_RECORD_REQUEST.REQUEST, deleteRecordRequest);
}

/**
 * Get Categories request/response handler
 */
export function* getCategoriesRequest() {
  try {
    yield put(getCategories.success({ categories }));
  } catch (err) {
    yield put(getCategories.failure(err));
  }
}

/**
 * Create Record request/response handler
 */
export function* createCategoryRequest(action) {
  try {
    const category = Object.assign({}, action.category);
    const duplicate = category.id;
    category.id = 1;
    if (categories.length) {
      category.id = Math.max(...categories.map(element => element.id)) + 1;
    }
    categories.push(category);
    if (duplicate) {
      const creatingRecords = records.filter(
        record => record.category_id === duplicate,
      );
      for (let i = 0; i < creatingRecords.length; i += 1) {
        const record = Object.assign({}, creatingRecords[i]);
        record.category_id = category.id;
        yield put(createRecord.request(record));
      }
    }
    yield put(createCategory.success({ category }));
  } catch (error) {
    yield put(createCategory.failure(error));
  }
}

/**
 * Update Record request/response handler
 */
export function* updateCategoryRequest(action) {
  try {
    const category = Object.assign({}, action.category);
    const index = categories.findIndex(
      element => element.id === action.category.id,
    );
    categories[index] = category;
    yield put(updateCategory.success({ category }));
  } catch (error) {
    yield put(updateCategory.failure(error));
  }
}

/**
 * Delete Record request/response handler
 */
export function* deleteCategoryRequest(action) {
  try {
    categories = categories.filter(category => category.id !== action.id);
    records = records.filter(record => record.category_id !== action.id);
    yield put(deleteCategory.success({ id: action.id }));
    yield put(getRecords.success({ records }));
  } catch (error) {
    yield put(deleteCategory.failure(error));
  }
}

export function* watchFetchCategories() {
  const subChannel = yield actionChannel(GET_CATEGORIES_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getCategoriesRequest, action);
  }
}

export function* watchCreateCategory() {
  yield takeLatest(CREATE_CATEGORY_REQUEST.REQUEST, createCategoryRequest);
}

export function* watchUpdateCategory() {
  yield takeLatest(UPDATE_CATEGORY_REQUEST.REQUEST, updateCategoryRequest);
}

export function* watchDeleteCategory() {
  yield takeLatest(DELETE_CATEGORY_REQUEST.REQUEST, deleteCategoryRequest);
}

/**
 * Create Record request/response handler
 */
export function* createMonthRequest(action) {
  if (!categories.length) {
    yield put(createMonth.failure());
    return;
  }
  try {
    let lastMonth = {
      year: parseInt(categories[0].month.split('-')[0], 10),
      month: parseInt(categories[0].month.split('-')[1], 10),
      str: categories[0].month,
    };
    for (let i = 1; i < categories.length; i += 1) {
      const selectedDate = {
        year: parseInt(categories[i].month.split('-')[0], 10),
        month: parseInt(categories[i].month.split('-')[1], 10),
        str: categories[i].month,
      };
      if (
        selectedDate.year > lastMonth.year ||
        (selectedDate.year === lastMonth.year &&
          selectedDate.month > lastMonth.month)
      ) {
        lastMonth = selectedDate;
      }
    }
    const selectedCategories = categories.filter(
      category => category.month === lastMonth.str,
    );
    for (let i = 0; i < selectedCategories.length; i += 1) {
      const category = Object.assign({}, selectedCategories[i]);
      category.month = action.month;
      const duplicate = category.id;
      category.id = 1;
      if (categories.length) {
        category.id = Math.max(...categories.map(element => element.id)) + 1;
      }
      categories.push(category);
      if (duplicate) {
        const creatingRecords = records.filter(
          record => record.category_id === duplicate,
        );
        for (let j = 0; j < creatingRecords.length; j += 1) {
          const record = Object.assign({}, creatingRecords[j]);
          record.category_id = category.id;
          record.due_date = `${action.month}-${record.due_date.split('-')[2]}`;
          yield put(createRecord.request(record));
        }
      }
      yield put(createCategory.success({ category }));
    }
  } catch (error) {
    yield put(createMonth.failure(error));
  }
}

export function* watchCreateMoonth() {
  yield takeLatest(CREATE_MONTH_REQUEST.REQUEST, createMonthRequest);
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* rootSaga() {
  yield all([
    watchFetchRecords(),
    watchCreateRecord(),
    watchUpdateRecord(),
    watchDeleteRecord(),
    watchFetchCategories(),
    watchCreateCategory(),
    watchUpdateCategory(),
    watchDeleteCategory(),
    watchCreateMoonth(),
  ]);
}
