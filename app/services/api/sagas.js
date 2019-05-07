import { all, put, call, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as apiActions from 'services/api/actions';
import { SIGN_UP_REQUEST, LOG_IN_REQUEST } from './constants';

const { signUp, logIn } = apiActions;

/**
 * Sign Up request/response handler
 */
export function* SignUpRequest(action) {
  const { response, error } = yield call(api.signUp, action);
  if (response) {
    yield put(signUp.success(response));
  } else {
    yield put(signUp.failure(error));
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST.REQUEST, SignUpRequest);
}

/**
 * Log In request/response handler
 */
export function* LogInRequest(action) {
  const { response, error } = yield call(api.logIn, action);
  if (response) {
    yield put(logIn.success(response));
  } else {
    yield put(logIn.failure(error));
  }
}

export function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST.REQUEST, LogInRequest);
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* rootSaga() {
  yield all([watchSignUp(), watchLogIn()]);
}
