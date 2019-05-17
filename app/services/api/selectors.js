import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = state => state;

const selectService = state => state.get('service', initialState);

const makeSelectLoading = () =>
  createSelector(selectService, userState => userState.get('loading'));

const makeSelectError = () =>
  createSelector(selectService, userState => userState.get('error'));

const makeSelectUser = () =>
  createSelector(selectService, userState => userState.get('user'));

export {
  selectState,
  selectService,
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
};
