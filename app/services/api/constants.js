const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

// Template function to get middleware constants
const createRequestTypes = base => {
  const res = {};
  // eslint-disable-next-line
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `app/Api/${base}_${type}`);
  return res;
};

export const SIGN_UP_REQUEST = createRequestTypes('SIGN_UP');
export const LOG_IN_REQUEST = createRequestTypes('LOG_IN');
export const REGISTER_EMAIL_REQUEST = createRequestTypes('REGISTER_EMAIL');
export const CONFIRM_REGISTER_REQUEST = createRequestTypes('CONFIRM_REGISTER');
export const GET_USER_REQUEST = createRequestTypes('GET_USER');
export const FORGOT_PASSWORD_REQUEST = createRequestTypes('FORGOT_PASSWORD');
export const RESET_PASSWORD_REQUEST = createRequestTypes('RESET_PASSWORD');
