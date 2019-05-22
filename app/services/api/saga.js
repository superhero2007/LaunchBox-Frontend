import { all, put, call, takeLatest } from 'redux-saga/effects';
import * as api from '.';
import * as apiActions from './actions';
import {
  SIGN_UP_REQUEST,
  LOG_IN_REQUEST,
  REGISTER_EMAIL_REQUEST,
  CONFIRM_REGISTER_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  GET_USER_REQUEST,
} from './constants';

const {
  register,
  logIn,
  registerEmail,
  registerConfirmation,
  forgotPassword,
  resetPassword,
  getUser,
} = apiActions;

/**
 * Sign Up request/response handler
 */
export function* RegisterRequest(action) {
  const { response, error } = yield call(api.register, action);
  if (response) {
    localStorage.setItem('token', response.user.token);
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
    localStorage.setItem('token', response.user.token);
    yield put(logIn.success(response));
  } else {
    yield put(logIn.failure(error));
  }
}

export function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST.REQUEST, LogInRequest);
}

/**
 * Send register email request/response handler
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

/**
 * Confirm register email request/response handler
 */
export function* RegisterConfirmationRequest(action) {
  const { response, error } = yield call(api.registerConfirmation, action);
  if (response) {
    yield put(registerConfirmation.success(response));
  } else {
    yield put(registerConfirmation.failure(error));
  }
}

export function* watchRegisterConfirmation() {
  yield takeLatest(
    CONFIRM_REGISTER_REQUEST.REQUEST,
    RegisterConfirmationRequest,
  );
}

/**
 * Confirm register email request/response handler
 */
export function* GetUserRequest(action) {
  const { response, error } = yield call(api.getUser, action);
  if (response) {
    yield put(getUser.success(response));
  } else {
    yield put(getUser.failure(error));
  }
}

export function* watchGetUser() {
  yield takeLatest(GET_USER_REQUEST.REQUEST, GetUserRequest);
}

/**
 * Forgot Password email request/response handler
 */
export function* ForgotPasswordRequest(action) {
  const { response, error } = yield call(api.forgotPassword, action);
  if (response) {
    yield put(forgotPassword.success(response));
  } else {
    yield put(forgotPassword.failure(error));
  }
}

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST.REQUEST, ForgotPasswordRequest);
}

/**
 * Reset Password email request/response handler
 */
export function* ResetPasswordRequest(action) {
  const { response, error } = yield call(api.resetPassword, action);
  if (response) {
    yield put(resetPassword.success(response));
  } else {
    yield put(resetPassword.failure(error));
  }
}

export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD_REQUEST.REQUEST, ResetPasswordRequest);
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* rootSaga() {
  yield all([
    watchRegister(),
    watchLogIn(),
    watchRegisterEmail(),
    watchRegisterConfirmation(),
    watchForgotPassword(),
    watchResetPassword(),
    watchGetUser(),
  ]);
}
