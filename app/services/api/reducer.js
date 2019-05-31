import { fromJS } from 'immutable';

import {
  SIGN_UP_REQUEST,
  LOG_IN_REQUEST,
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

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  user: null,
});

function ServiceReducer(state = initialState, action) {
  switch (action.type) {
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
        .set('user', action.response.user);
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
    default:
      return state;
  }
}

export default ServiceReducer;
