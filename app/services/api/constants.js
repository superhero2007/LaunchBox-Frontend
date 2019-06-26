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
export const FORGOT_PASSWORD_REQUEST = createRequestTypes('FORGOT_PASSWORD');
export const RESET_PASSWORD_REQUEST = createRequestTypes('RESET_PASSWORD');

export const GET_USER_REQUEST = createRequestTypes('GET_USER');
export const UPDATE_USER_REQUEST = createRequestTypes('UPDATE_USER');
export const UPDATE_EMAIL_REQUEST = createRequestTypes('UPDATE_EMAIL');
export const UPDATE_EMAIL_CONFIRM_REQUEST = createRequestTypes(
  'UPDATE_EMAIL_CONFIRM',
);
export const UPDATE_PASSWORD_REQUEST = createRequestTypes('UPDATE_PASSWORD');
export const CLEAR_USER_REQUEST = createRequestTypes('CLEAR_USER');
export const DELETE_USER_REQUEST = createRequestTypes('DELETE_USER');

export const UPLOAD_PHOTO_REQUEST = createRequestTypes('UPLOAD_PHOTO');
export const DELETE_PHOTO_REQUEST = createRequestTypes('DELETE_PHOTO');

export const USER_SUBSCRIPTION_REQUEST = createRequestTypes(
  'USER_SUBSCRIPTION',
);

export const GET_COMPANY_REQUEST = createRequestTypes('GET_COMPANY');
export const UPDATE_COMPANY_REQUEST = createRequestTypes('UPDATE_COMPANY');
