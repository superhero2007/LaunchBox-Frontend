import { all, put, call, takeLatest } from 'redux-saga/effects';
import * as api from 'services/api';
import * as apiActions from 'services/api/actions';
import {
  SIGN_UP_REQUEST,
  LOG_IN_REQUEST,
  REGISTER_EMAIL_REQUEST,
} from './constants';

const { register, logIn, registerEmail } = apiActions;

/**
 * Sign Up request/response handler
 */
export function* RegisterRequest(action) {
  const { response, error } = yield call(api.register, action);
  if (response) {
    yield put(register.success(response));
  } else {
    yield put(register.failure(error));
  }
}

export function* watchRegister() {
  yield takeLatest(SIGN_UP_REQUEST.REQUEST, RegisterRequest);
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

/**
 * Sign Up request/response handler
 */
export function* RegisterEmailRequest(action) {
  const { response, error } = yield call(api.registerEmail, action);
  if (response) {
    yield put(registerEmail.success(response));
  } else {
    yield put(registerEmail.failure(error));
  }
}

export function* watchRegisterEmail() {
  yield takeLatest(REGISTER_EMAIL_REQUEST.REQUEST, RegisterEmailRequest);
}

export default function* rootSaga() {
  yield all([watchRegister(), watchLogIn(), watchRegisterEmail()]);
}
