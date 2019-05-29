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
  UPDATE_USER_REQUEST,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_CONFIRM_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  CLEAR_USER_REQUEST,
  DELETE_USER_REQUEST,
  UPLOAD_PHOTO_REQUEST,
  DELETE_PHOTO_REQUEST,
} from './constants';

const {
  register,
  logIn,
  registerEmail,
  registerConfirmation,
  forgotPassword,
  resetPassword,
  getUser,
  updateUser,
  updateEmail,
  updateEmailConfirm,
  updatePassword,
  clearUser,
  deleteUser,
  uploadPhoto,
  deletePhoto,
} = apiActions;

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
 * Update user request/response handler
 */
export function* UpdateUserRequest(action) {
  const { response, error } = yield call(api.updateUser, action);
  if (response) {
    yield put(updateUser.success(response));
  } else {
    yield put(updateUser.failure(error));
  }
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER_REQUEST.REQUEST, UpdateUserRequest);
}

/**
 * Update email request/response handler
 */
export function* UpdateEmailRequest(action) {
  const { response, error } = yield call(api.updateEmail, action);
  if (response) {
    yield put(updateEmail.success(response));
  } else {
    yield put(updateEmail.failure(error));
  }
}

export function* watchUpdateEmail() {
  yield takeLatest(UPDATE_EMAIL_REQUEST.REQUEST, UpdateEmailRequest);
}

/**
 * Update email confirm request/response handler
 */
export function* UpdateEmailConfirmRequest(action) {
  const { response, error } = yield call(api.updateEmailConfirm, action);
  if (response) {
    yield put(updateEmailConfirm.success(response));
  } else {
    yield put(updateEmailConfirm.failure(error));
  }
}

export function* watchUpdateEmailConfirm() {
  yield takeLatest(
    UPDATE_EMAIL_CONFIRM_REQUEST.REQUEST,
    UpdateEmailConfirmRequest,
  );
}

/**
 * Update email request/response handler
 */
export function* UpdatePasswordRequest(action) {
  const { response, error } = yield call(api.updatePassword, action);
  if (response) {
    yield put(updatePassword.success(response));
  } else {
    yield put(updatePassword.failure(error));
  }
}

export function* watchUpdatePassword() {
  yield takeLatest(UPDATE_PASSWORD_REQUEST.REQUEST, UpdatePasswordRequest);
}

/**
 * Clear user request/response handler
 */
export function* ClearUserRequest(action) {
  const { response, error } = yield call(api.clearUser, action);
  if (response) {
    yield put(clearUser.success(response));
  } else {
    yield put(clearUser.failure(error));
  }
}

export function* watchClearUser() {
  yield takeLatest(CLEAR_USER_REQUEST.REQUEST, ClearUserRequest);
}

/**
 * Delete user request/response handler
 */
export function* DeleteUserRequest(action) {
  const { response, error } = yield call(api.deleteUser, action);
  if (response) {
    yield put(deleteUser.success(response));
  } else {
    yield put(deleteUser.failure(error));
  }
}

export function* watchDeleteUser() {
  yield takeLatest(DELETE_USER_REQUEST.REQUEST, DeleteUserRequest);
}

/**
 * Get user request/response handler
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
 * Upload user photo request/response handler
 */
export function* UploadPhotoRequest(action) {
  const { response, error } = yield call(api.uploadPhoto, action);
  if (response) {
    yield put(uploadPhoto.success(response));
  } else {
    yield put(uploadPhoto.failure(error));
  }
}

export function* watchUploadPhoto() {
  yield takeLatest(UPLOAD_PHOTO_REQUEST.REQUEST, UploadPhotoRequest);
}

/**
 * Delete user photo request/response handler
 */
export function* DeletePhotoRequest() {
  const { response, error } = yield call(api.deletePhoto, null);
  if (response) {
    yield put(deletePhoto.success(response));
  } else {
    yield put(deletePhoto.failure(error));
  }
}

export function* watchDeletePhoto() {
  yield takeLatest(DELETE_PHOTO_REQUEST.REQUEST, DeletePhotoRequest);
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
    watchUpdateUser(),
    watchUpdateEmail(),
    watchUpdateEmailConfirm(),
    watchUpdatePassword(),
    watchClearUser(),
    watchDeleteUser(),
    watchUploadPhoto(),
    watchDeletePhoto(),
  ]);
}
