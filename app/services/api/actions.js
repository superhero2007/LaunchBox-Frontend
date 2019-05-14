import {
  SIGN_UP_REQUEST,
  LOG_IN_REQUEST,
  REGISTER_EMAIL_REQUEST,
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
