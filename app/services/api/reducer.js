import { fromJS } from 'immutable';

import {
  CLEAR_ERROR_REQUEST,
  SIGN_UP_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
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
  USER_SUBSCRIPTION_REQUEST,
  GET_COMPANY_REQUEST,
  UPDATE_COMPANY_REQUEST,
  ADD_PAYMENT_REQUEST,
  UPDATE_PAYMENT_REQUEST,
  CREATE_SUBSCRIBE_REQUEST,
  UPDATE_SUBSCRIBE_REQUEST,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  user: null,
  company: null,
});

function ServiceReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_ERROR_REQUEST:
      return state.set('loading', false).set('error', false);
    case SIGN_UP_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case SIGN_UP_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case SIGN_UP_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case LOG_IN_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case LOG_IN_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case LOG_IN_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case LOG_OUT_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case LOG_OUT_REQUEST.SUCCESS:
      localStorage.removeItem('token');
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', null);
    case LOG_OUT_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case CONFIRM_REGISTER_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case CONFIRM_REGISTER_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case CONFIRM_REGISTER_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case FORGOT_PASSWORD_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case FORGOT_PASSWORD_REQUEST.SUCCESS:
      return state.set('loading', false).set('error', false);
    case FORGOT_PASSWORD_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case RESET_PASSWORD_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case RESET_PASSWORD_REQUEST.SUCCESS:
      return state.set('loading', false).set('error', false);
    case RESET_PASSWORD_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case GET_USER_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case GET_USER_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user)
        .set('company', action.response.company);
    case GET_USER_REQUEST.FAILURE:
      localStorage.removeItem('token');
      return state.set('loading', false).set('error', action.error);

    case UPDATE_USER_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPDATE_USER_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case UPDATE_USER_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case UPDATE_EMAIL_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPDATE_EMAIL_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case UPDATE_EMAIL_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case UPDATE_EMAIL_CONFIRM_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPDATE_EMAIL_CONFIRM_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case UPDATE_EMAIL_CONFIRM_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case UPDATE_PASSWORD_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPDATE_PASSWORD_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case UPDATE_PASSWORD_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case CLEAR_USER_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case CLEAR_USER_REQUEST.SUCCESS:
      return state.set('loading', false).set('error', false);
    case CLEAR_USER_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case DELETE_USER_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case DELETE_USER_REQUEST.SUCCESS:
      localStorage.removeItem('token');
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', null);
    case DELETE_USER_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case UPLOAD_PHOTO_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPLOAD_PHOTO_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case UPLOAD_PHOTO_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case DELETE_PHOTO_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case DELETE_PHOTO_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case DELETE_PHOTO_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case USER_SUBSCRIPTION_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case USER_SUBSCRIPTION_REQUEST.SUCCESS:
      localStorage.setItem('token', action.response.user.token);
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.response.user);
    case USER_SUBSCRIPTION_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case GET_COMPANY_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case GET_COMPANY_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('company', action.response.company);
    case GET_COMPANY_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case UPDATE_COMPANY_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPDATE_COMPANY_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('company', action.response.company);
    case UPDATE_COMPANY_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case ADD_PAYMENT_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case ADD_PAYMENT_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('company', action.response.company);
    case ADD_PAYMENT_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case UPDATE_PAYMENT_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPDATE_PAYMENT_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('company', action.response.company);
    case UPDATE_PAYMENT_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case CREATE_SUBSCRIBE_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case CREATE_SUBSCRIBE_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('company', action.response.company);
    case CREATE_SUBSCRIBE_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);

    case UPDATE_SUBSCRIBE_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case UPDATE_SUBSCRIBE_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('company', action.response.company);
    case UPDATE_SUBSCRIBE_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default ServiceReducer;
