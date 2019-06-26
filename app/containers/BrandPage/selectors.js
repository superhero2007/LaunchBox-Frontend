import { createSelector } from 'reselect';

const selectBrand = state => state.get('brand');

const makeSelectBrands = () =>
  createSelector(selectBrand, brandState => brandState.get('brands').toJS());

const makeSelectPresences = () =>
  createSelector(selectBrand, brandState => brandState.get('presences').toJS());

const makeSelectLogos = () =>
  createSelector(selectBrand, brandState => brandState.get('logos').toJS());

const makeSelectFonts = () =>
  createSelector(selectBrand, brandState => brandState.get('fonts').toJS());

const makeSelectFontColors = () =>
  createSelector(selectBrand, brandState =>
    brandState.get('fontColors').toJS(),
  );

const makeSelectBrandColors = () =>
  createSelector(selectBrand, brandState =>
    brandState.get('brandColors').toJS(),
  );

const makeSelectIcons = () =>
  createSelector(selectBrand, brandState => brandState.get('icons').toJS());

const makeSelectMembers = () =>
  createSelector(selectBrand, brandState => brandState.get('members').toJS());

const makeSelectInvitations = () =>
  createSelector(selectBrand, brandState =>
    brandState.get('invitations').toJS(),
  );

export {
  selectBrand,
  makeSelectBrands,
  makeSelectPresences,
  makeSelectLogos,
  makeSelectFonts,
  makeSelectFontColors,
  makeSelectBrandColors,
  makeSelectIcons,
  makeSelectMembers,
  makeSelectInvitations,
};
