/* eslint-disable prefer-destructuring */
/**
 * Gets the inputElements
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
  GET_INPUT_ELEMENTS_REQUEST,
  CREATE_INPUT_ELEMENT_REQUEST,
  UPDATE_INPUT_ELEMENT_REQUEST,
  DELETE_INPUT_ELEMENT_REQUEST,
} from './constants';
import {
  getInputElements,
  createInputElement,
  updateInputElement,
  deleteInputElement,
} from './actions';
import * as api from './service';

/**
 * Get InputElements request/response handler
 */
export function* getInputElementsRequest() {
  const { response, error } = yield call(api.getElementsService, 'input', null);
  if (response) {
    yield put(getInputElements.success(response));
  } else {
    yield put(getInputElements.failure(error));
  }
}

/**
 * Create InputElement request/response handler
 */
export function* createInputElementRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'input',
    action.inputElement,
  );
  if (response) {
    yield put(createInputElement.success(response));
  } else {
    yield put(createInputElement.failure(error));
  }
}

/**
 * Update InputElement request/response handler
 */
export function* updateInputElementRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'input',
    action.inputElement,
  );
  if (response) {
    yield put(updateInputElement.success(response));
  } else {
    yield put(updateInputElement.failure(error));
  }
}

/**
 * Delete InputElement request/response handler
 */
export function* deleteInputElementRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'input',
    action._id,
  );
  if (response) {
    yield put(deleteInputElement.success(response));
  } else {
    yield put(deleteInputElement.failure(error));
  }
}

export function* watchFetchInputElements() {
  const subChannel = yield actionChannel(GET_INPUT_ELEMENTS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getInputElementsRequest, action);
  }
}

export function* watchCreateInputElement() {
  yield takeLatest(
    CREATE_INPUT_ELEMENT_REQUEST.REQUEST,
    createInputElementRequest,
  );
}

export function* watchUpdateInputElement() {
  yield takeLatest(
    UPDATE_INPUT_ELEMENT_REQUEST.REQUEST,
    updateInputElementRequest,
  );
}

export function* watchDeleteInputElement() {
  yield takeLatest(
    DELETE_INPUT_ELEMENT_REQUEST.REQUEST,
    deleteInputElementRequest,
  );
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* rootSaga() {
  yield all([
    watchFetchInputElements(),
    watchCreateInputElement(),
    watchUpdateInputElement(),
    watchDeleteInputElement(),
  ]);
}
