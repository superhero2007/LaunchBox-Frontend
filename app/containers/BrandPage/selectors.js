import { createSelector } from 'reselect';

const selectBrand = state => state.get('brand');

const makeSelectInputElements = () =>
  createSelector(selectBrand, brandState =>
    brandState.get('inputElements').toJS(),
  );

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

export {
  selectBrand,
  makeSelectInputElements,
  makeSelectPresences,
  makeSelectLogos,
  makeSelectFonts,
  makeSelectFontColors,
  makeSelectBrandColors,
  makeSelectIcons,
};
