import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectService = state => state.get('service', initialState);

const makeSelectUser = () =>
  createSelector(selectService, userState => userState.get('user'));

export { selectService, makeSelectUser };
