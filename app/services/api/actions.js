import {
  SIGN_UP_REQUEST,
  LOG_IN_REQUEST,
  REGISTER_EMAIL_REQUEST,
  CONFIRM_REGISTER_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  GET_USER_REQUEST,
} from './constants';

function action(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

/*
 * Action to sign up
 */
export const register = {
  request: query => action(SIGN_UP_REQUEST.REQUEST, { query }),
  success: response => action(SIGN_UP_REQUEST.SUCCESS, { response }),
  failure: error => action(SIGN_UP_REQUEST.FAILURE, { error }),
};

/*
 * Action to logIn
 */
export const logIn = {
  request: query => action(LOG_IN_REQUEST.REQUEST, { query }),
  success: response => action(LOG_IN_REQUEST.SUCCESS, { response }),
  failure: error => action(LOG_IN_REQUEST.FAILURE, { error }),
};

/*
 * Action to send registration email
 */
export const registerEmail = {
  request: query => action(REGISTER_EMAIL_REQUEST.REQUEST, { query }),
  success: response => action(REGISTER_EMAIL_REQUEST.SUCCESS, { response }),
  failure: error => action(REGISTER_EMAIL_REQUEST.FAILURE, { error }),
};

/*
 * Action to confirm registration token
 */
export const registerConfirmation = {
  request: token => action(CONFIRM_REGISTER_REQUEST.REQUEST, { token }),
  success: response => action(CONFIRM_REGISTER_REQUEST.SUCCESS, { response }),
  failure: error => action(CONFIRM_REGISTER_REQUEST.FAILURE, { error }),
};

/*
 * Action to get user from token
 */
export const getUser = {
  request: token => action(GET_USER_REQUEST.REQUEST, { token }),
  success: response => action(GET_USER_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_USER_REQUEST.FAILURE, { error }),
};

/*
 * Action to forgot password
 */
export const forgotPassword = {
  request: email => action(FORGOT_PASSWORD_REQUEST.REQUEST, { email }),
  success: response => action(FORGOT_PASSWORD_REQUEST.SUCCESS, { response }),
  failure: error => action(FORGOT_PASSWORD_REQUEST.FAILURE, { error }),
};

/*
 * Action to reset password
 */
export const resetPassword = {
  request: token => action(RESET_PASSWORD_REQUEST.REQUEST, { token }),
  success: response => action(RESET_PASSWORD_REQUEST.SUCCESS, { response }),
  failure: error => action(RESET_PASSWORD_REQUEST.FAILURE, { error }),
};
