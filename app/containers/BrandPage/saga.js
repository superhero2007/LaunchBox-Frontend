/* eslint-disable prefer-destructuring */
/**
 * Gets the inputElements
 */

import {
  all,
  call,
  take,
  put,
  takeLatest,
  actionChannel,
} from 'redux-saga/effects';
import {
  GET_INPUT_ELEMENTS_REQUEST,
  CREATE_INPUT_ELEMENT_REQUEST,
  UPDATE_INPUT_ELEMENT_REQUEST,
  DELETE_INPUT_ELEMENT_REQUEST,
  GET_PRESENCES_REQUEST,
  CREATE_PRESENCE_REQUEST,
  UPDATE_PRESENCE_REQUEST,
  DELETE_PRESENCE_REQUEST,
  GET_LOGOS_REQUEST,
  CREATE_LOGO_REQUEST,
  UPDATE_LOGO_REQUEST,
  DELETE_LOGO_REQUEST,
  GET_FONTS_REQUEST,
  CREATE_FONT_REQUEST,
  UPDATE_FONT_REQUEST,
  DELETE_FONT_REQUEST,
  GET_FONT_COLORS_REQUEST,
  CREATE_FONT_COLOR_REQUEST,
  UPDATE_FONT_COLOR_REQUEST,
  DELETE_FONT_COLOR_REQUEST,
  GET_BRAND_COLORS_REQUEST,
  CREATE_BRAND_COLOR_REQUEST,
  UPDATE_BRAND_COLOR_REQUEST,
  DELETE_BRAND_COLOR_REQUEST,
  GET_ICONS_REQUEST,
  CREATE_ICON_REQUEST,
  UPDATE_ICON_REQUEST,
  DELETE_ICON_REQUEST,
} from './constants';
import {
  getInputElements,
  createInputElement,
  updateInputElement,
  deleteInputElement,
  getPresences,
  createPresence,
  updatePresence,
  deletePresence,
  getLogos,
  createLogo,
  updateLogo,
  deleteLogo,
  getFonts,
  createFont,
  updateFont,
  deleteFont,
  getFontColors,
  createFontColor,
  updateFontColor,
  deleteFontColor,
  getBrandColors,
  createBrandColor,
  updateBrandColor,
  deleteBrandColor,
  getIcons,
  createIcon,
  updateIcon,
  deleteIcon,
} from './actions';
import * as api from './service';

/**
 * Get InputElements request/response handler
 */
export function* getInputElementsRequest() {
  const { response, error } = yield call(api.getElementsService, 'input', null);
  if (response) {
    yield put(getInputElements.success(response));
  } else {
    yield put(getInputElements.failure(error));
  }
}

/**
 * Create InputElement request/response handler
 */
export function* createInputElementRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'input',
    action.inputElement,
  );
  if (response) {
    yield put(createInputElement.success(response));
  } else {
    yield put(createInputElement.failure(error));
  }
}

/**
 * Update InputElement request/response handler
 */
export function* updateInputElementRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'input',
    action.inputElement,
  );
  if (response) {
    yield put(updateInputElement.success(response));
  } else {
    yield put(updateInputElement.failure(error));
  }
}

/**
 * Delete InputElement request/response handler
 */
export function* deleteInputElementRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'input',
    action._id,
  );
  if (response) {
    yield put(deleteInputElement.success(response));
  } else {
    yield put(deleteInputElement.failure(error));
  }
}

export function* watchFetchInputElements() {
  const subChannel = yield actionChannel(GET_INPUT_ELEMENTS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getInputElementsRequest, action);
  }
}

export function* watchCreateInputElement() {
  yield takeLatest(
    CREATE_INPUT_ELEMENT_REQUEST.REQUEST,
    createInputElementRequest,
  );
}

export function* watchUpdateInputElement() {
  yield takeLatest(
    UPDATE_INPUT_ELEMENT_REQUEST.REQUEST,
    updateInputElementRequest,
  );
}

export function* watchDeleteInputElement() {
  yield takeLatest(
    DELETE_INPUT_ELEMENT_REQUEST.REQUEST,
    deleteInputElementRequest,
  );
}

/**
 * Get Presences request/response handler
 */
export function* getPresencesRequest() {
  const { response, error } = yield call(
    api.getElementsService,
    'presence',
    null,
  );
  if (response) {
    yield put(getPresences.success(response));
  } else {
    yield put(getPresences.failure(error));
  }
}

/**
 * Create Presence request/response handler
 */
export function* createPresenceRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'presence',
    action.presence,
  );
  if (response) {
    yield put(createPresence.success(response));
  } else {
    yield put(createPresence.failure(error));
  }
}

/**
 * Update Presence request/response handler
 */
export function* updatePresenceRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'presence',
    action.presence,
  );
  if (response) {
    yield put(updatePresence.success(response));
  } else {
    yield put(updatePresence.failure(error));
  }
}

/**
 * Delete Presence request/response handler
 */
export function* deletePresenceRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'presence',
    action._id,
  );
  if (response) {
    yield put(deletePresence.success(response));
  } else {
    yield put(deletePresence.failure(error));
  }
}

export function* watchFetchPresences() {
  const subChannel = yield actionChannel(GET_PRESENCES_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getPresencesRequest, action);
  }
}

export function* watchCreatePresence() {
  yield takeLatest(CREATE_PRESENCE_REQUEST.REQUEST, createPresenceRequest);
}

export function* watchUpdatePresence() {
  yield takeLatest(UPDATE_PRESENCE_REQUEST.REQUEST, updatePresenceRequest);
}

export function* watchDeletePresence() {
  yield takeLatest(DELETE_PRESENCE_REQUEST.REQUEST, deletePresenceRequest);
}

/**
 * Get Logos request/response handler
 */
export function* getLogosRequest() {
  const { response, error } = yield call(api.getElementsService, 'logo', null);
  if (response) {
    yield put(getLogos.success(response));
  } else {
    yield put(getLogos.failure(error));
  }
}

/**
 * Create Logo request/response handler
 */
export function* createLogoRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'logo',
    action.logo,
  );
  if (response) {
    yield put(createLogo.success(response));
  } else {
    yield put(createLogo.failure(error));
  }
}

/**
 * Update Logo request/response handler
 */
export function* updateLogoRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'logo',
    action.logo,
  );
  if (response) {
    yield put(updateLogo.success(response));
  } else {
    yield put(updateLogo.failure(error));
  }
}

/**
 * Delete Logo request/response handler
 */
export function* deleteLogoRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'logo',
    action._id,
  );
  if (response) {
    yield put(deleteLogo.success(response));
  } else {
    yield put(deleteLogo.failure(error));
  }
}

export function* watchFetchLogos() {
  const subChannel = yield actionChannel(GET_LOGOS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getLogosRequest, action);
  }
}

export function* watchCreateLogo() {
  yield takeLatest(CREATE_LOGO_REQUEST.REQUEST, createLogoRequest);
}

export function* watchUpdateLogo() {
  yield takeLatest(UPDATE_LOGO_REQUEST.REQUEST, updateLogoRequest);
}

export function* watchDeleteLogo() {
  yield takeLatest(DELETE_LOGO_REQUEST.REQUEST, deleteLogoRequest);
}

/**
 * Get Fonts request/response handler
 */
export function* getFontsRequest() {
  const { response, error } = yield call(api.getElementsService, 'font', null);
  if (response) {
    yield put(getFonts.success(response));
  } else {
    yield put(getFonts.failure(error));
  }
}

/**
 * Create Font request/response handler
 */
export function* createFontRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'font',
    action.font,
  );
  if (response) {
    yield put(createFont.success(response));
  } else {
    yield put(createFont.failure(error));
  }
}

/**
 * Update Font request/response handler
 */
export function* updateFontRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'font',
    action.font,
  );
  if (response) {
    yield put(updateFont.success(response));
  } else {
    yield put(updateFont.failure(error));
  }
}

/**
 * Delete Font request/response handler
 */
export function* deleteFontRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'font',
    action._id,
  );
  if (response) {
    yield put(deleteFont.success(response));
  } else {
    yield put(deleteFont.failure(error));
  }
}

export function* watchFetchFonts() {
  const subChannel = yield actionChannel(GET_FONTS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getFontsRequest, action);
  }
}

export function* watchCreateFont() {
  yield takeLatest(CREATE_FONT_REQUEST.REQUEST, createFontRequest);
}

export function* watchUpdateFont() {
  yield takeLatest(UPDATE_FONT_REQUEST.REQUEST, updateFontRequest);
}

export function* watchDeleteFont() {
  yield takeLatest(DELETE_FONT_REQUEST.REQUEST, deleteFontRequest);
}

/**
 * Get FontColors request/response handler
 */
export function* getFontColorsRequest() {
  const { response, error } = yield call(
    api.getElementsService,
    'font-color',
    null,
  );
  if (response) {
    yield put(getFontColors.success(response));
  } else {
    yield put(getFontColors.failure(error));
  }
}

/**
 * Create FontColor request/response handler
 */
export function* createFontColorRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'font-color',
    action.fontColor,
  );
  if (response) {
    yield put(createFontColor.success(response));
  } else {
    yield put(createFontColor.failure(error));
  }
}

/**
 * Update FontColor request/response handler
 */
export function* updateFontColorRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'font-color',
    action.fontColor,
  );
  if (response) {
    yield put(updateFontColor.success(response));
  } else {
    yield put(updateFontColor.failure(error));
  }
}

/**
 * Delete FontColor request/response handler
 */
export function* deleteFontColorRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'font-color',
    action._id,
  );
  if (response) {
    yield put(deleteFontColor.success(response));
  } else {
    yield put(deleteFontColor.failure(error));
  }
}

export function* watchFetchFontColors() {
  const subChannel = yield actionChannel(GET_FONT_COLORS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getFontColorsRequest, action);
  }
}

export function* watchCreateFontColor() {
  yield takeLatest(CREATE_FONT_COLOR_REQUEST.REQUEST, createFontColorRequest);
}

export function* watchUpdateFontColor() {
  yield takeLatest(UPDATE_FONT_COLOR_REQUEST.REQUEST, updateFontColorRequest);
}

export function* watchDeleteFontColor() {
  yield takeLatest(DELETE_FONT_COLOR_REQUEST.REQUEST, deleteFontColorRequest);
}

/**
 * Get BrandColors request/response handler
 */
export function* getBrandColorsRequest() {
  const { response, error } = yield call(
    api.getElementsService,
    'brand-color',
    null,
  );
  if (response) {
    yield put(getBrandColors.success(response));
  } else {
    yield put(getBrandColors.failure(error));
  }
}

/**
 * Create BrandColor request/response handler
 */
export function* createBrandColorRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'brand-color',
    action.brandColor,
  );
  if (response) {
    yield put(createBrandColor.success(response));
  } else {
    yield put(createBrandColor.failure(error));
  }
}

/**
 * Update BrandColor request/response handler
 */
export function* updateBrandColorRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'brand-color',
    action.brandColor,
  );
  if (response) {
    yield put(updateBrandColor.success(response));
  } else {
    yield put(updateBrandColor.failure(error));
  }
}

/**
 * Delete BrandColor request/response handler
 */
export function* deleteBrandColorRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'brand-color',
    action._id,
  );
  if (response) {
    yield put(deleteBrandColor.success(response));
  } else {
    yield put(deleteBrandColor.failure(error));
  }
}

export function* watchFetchBrandColors() {
  const subChannel = yield actionChannel(GET_BRAND_COLORS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getBrandColorsRequest, action);
  }
}

export function* watchCreateBrandColor() {
  yield takeLatest(CREATE_BRAND_COLOR_REQUEST.REQUEST, createBrandColorRequest);
}

export function* watchUpdateBrandColor() {
  yield takeLatest(UPDATE_BRAND_COLOR_REQUEST.REQUEST, updateBrandColorRequest);
}

export function* watchDeleteBrandColor() {
  yield takeLatest(DELETE_BRAND_COLOR_REQUEST.REQUEST, deleteBrandColorRequest);
}

/**
 * Get Icons request/response handler
 */
export function* getIconsRequest() {
  const { response, error } = yield call(api.getElementsService, 'icon', null);
  if (response) {
    yield put(getIcons.success(response));
  } else {
    yield put(getIcons.failure(error));
  }
}

/**
 * Create Icon request/response handler
 */
export function* createIconRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'icon',
    action.icon,
  );
  if (response) {
    yield put(createIcon.success(response));
  } else {
    yield put(createIcon.failure(error));
  }
}

/**
 * Update Icon request/response handler
 */
export function* updateIconRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'icon',
    action.icon,
  );
  if (response) {
    yield put(updateIcon.success(response));
  } else {
    yield put(updateIcon.failure(error));
  }
}

/**
 * Delete Icon request/response handler
 */
export function* deleteIconRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'icon',
    action._id,
  );
  if (response) {
    yield put(deleteIcon.success(response));
  } else {
    yield put(deleteIcon.failure(error));
  }
}

export function* watchFetchIcons() {
  const subChannel = yield actionChannel(GET_ICONS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getIconsRequest, action);
  }
}

export function* watchCreateIcon() {
  yield takeLatest(CREATE_ICON_REQUEST.REQUEST, createIconRequest);
}

export function* watchUpdateIcon() {
  yield takeLatest(UPDATE_ICON_REQUEST.REQUEST, updateIconRequest);
}

export function* watchDeleteIcon() {
  yield takeLatest(DELETE_ICON_REQUEST.REQUEST, deleteIconRequest);
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* rootSaga() {
  yield all([
    watchFetchInputElements(),
    watchCreateInputElement(),
    watchUpdateInputElement(),
    watchDeleteInputElement(),
    watchFetchPresences(),
    watchCreatePresence(),
    watchUpdatePresence(),
    watchDeletePresence(),
    watchFetchLogos(),
    watchCreateLogo(),
    watchUpdateLogo(),
    watchDeleteLogo(),
    watchFetchFonts(),
    watchCreateFont(),
    watchUpdateFont(),
    watchDeleteFont(),
    watchFetchFontColors(),
    watchCreateFontColor(),
    watchUpdateFontColor(),
    watchDeleteFontColor(),
    watchFetchBrandColors(),
    watchCreateBrandColor(),
    watchUpdateBrandColor(),
    watchDeleteBrandColor(),
    watchFetchIcons(),
    watchCreateIcon(),
    watchUpdateIcon(),
    watchDeleteIcon(),
  ]);
}
