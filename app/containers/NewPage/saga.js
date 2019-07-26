/* eslint-disable prefer-destructuring */
import {
  all,
  call,
  take,
  put,
  takeLatest,
  actionChannel,
} from 'redux-saga/effects';
import {
  GET_BRANDS_REQUEST,
  CREATE_BRAND_REQUEST,
  UPDATE_BRAND_REQUEST,
  DELETE_BRAND_REQUEST,
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
  GET_MEMBERS_REQUEST,
  CREATE_MEMBER_REQUEST,
  UPDATE_MEMBER_REQUEST,
  DELETE_MEMBER_REQUEST,
  GET_INVITATIONS_REQUEST,
  CREATE_INVITATION_REQUEST,
  UPDATE_INVITATION_REQUEST,
  DELETE_INVITATION_REQUEST,
} from './constants';
import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
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
  getMembers,
  createMember,
  updateMember,
  deleteMember,
  getInvitations,
  createInvitation,
  updateInvitation,
  deleteInvitation,
} from './actions';
import * as api from './service';

/**
 * Get brands request/response handler
 */
export function* getBrandsRequest() {
  const { response, error } = yield call(api.getElementsService, 'brand', null);
  if (response) {
    yield put(getBrands.success(response));
  } else {
    yield put(getBrands.failure(error));
  }
}

/**
 * Create brand request/response handler
 */
export function* createBrandRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'brand',
    action.brand,
  );
  if (response) {
    yield put(createBrand.success(response));
  } else {
    yield put(createBrand.failure(error));
  }
}

/**
 * Update brand request/response handler
 */
export function* updateBrandRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'brand',
    action.brand,
  );
  if (response) {
    yield put(updateBrand.success(response));
  } else {
    yield put(updateBrand.failure(error));
  }
}

/**
 * Delete brand request/response handler
 */
export function* deleteBrandRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'brand',
    action._id,
  );
  if (response) {
    yield put(deleteBrand.success(response));
  } else {
    yield put(deleteBrand.failure(error));
  }
}

export function* watchFetchBrands() {
  const subChannel = yield actionChannel(GET_BRANDS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getBrandsRequest, action);
  }
}

export function* watchCreateBrand() {
  yield takeLatest(CREATE_BRAND_REQUEST.REQUEST, createBrandRequest);
}

export function* watchUpdateBrand() {
  yield takeLatest(UPDATE_BRAND_REQUEST.REQUEST, updateBrandRequest);
}

export function* watchDeleteBrand() {
  yield takeLatest(DELETE_BRAND_REQUEST.REQUEST, deleteBrandRequest);
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
 * Get Members request/response handler
 */
export function* getMembersRequest() {
  const { response, error } = yield call(
    api.getElementsService,
    'member',
    null,
  );
  if (response) {
    yield put(getMembers.success(response));
  } else {
    yield put(getMembers.failure(error));
  }
}

/**
 * Create Member request/response handler
 */
export function* createMemberRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'member',
    action.member,
  );
  if (response) {
    yield put(createMember.success(response));
  } else {
    yield put(createMember.failure(error));
  }
}

/**
 * Update Member request/response handler
 */
export function* updateMemberRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'member',
    action.member,
  );
  if (response) {
    yield put(updateMember.success(response));
  } else {
    yield put(updateMember.failure(error));
  }
}

/**
 * Delete Member request/response handler
 */
export function* deleteMemberRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'member',
    action._id,
  );
  if (response) {
    yield put(deleteMember.success(response));
  } else {
    yield put(deleteMember.failure(error));
  }
}

export function* watchFetchMembers() {
  const subChannel = yield actionChannel(GET_MEMBERS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getMembersRequest, action);
  }
}

export function* watchCreateMember() {
  yield takeLatest(CREATE_MEMBER_REQUEST.REQUEST, createMemberRequest);
}

export function* watchUpdateMember() {
  yield takeLatest(UPDATE_MEMBER_REQUEST.REQUEST, updateMemberRequest);
}

export function* watchDeleteMember() {
  yield takeLatest(DELETE_MEMBER_REQUEST.REQUEST, deleteMemberRequest);
}

/**
 * Get Invitations request/response handler
 */
export function* getInvitationsRequest() {
  const { response, error } = yield call(
    api.getElementsService,
    'invitation',
    null,
  );
  if (response) {
    yield put(getInvitations.success(response));
  } else {
    yield put(getInvitations.failure(error));
  }
}

/**
 * Create Invitation request/response handler
 */
export function* createInvitationRequest(action) {
  const { response, error } = yield call(
    api.createElementService,
    'invitation',
    action.invitation,
  );
  if (response) {
    yield put(createInvitation.success(response));
  } else {
    yield put(createInvitation.failure(error));
  }
}

/**
 * Update Invitation request/response handler
 */
export function* updateInvitationRequest(action) {
  const { response, error } = yield call(
    api.updateElementService,
    'invitation',
    action.invitation,
  );
  if (response) {
    yield put(updateInvitation.success(response));
  } else {
    yield put(updateInvitation.failure(error));
  }
}

/**
 * Delete Invitation request/response handler
 */
export function* deleteInvitationRequest(action) {
  const { response, error } = yield call(
    api.deleteElementService,
    'invitation',
    action._id,
  );
  if (response) {
    yield put(deleteInvitation.success(response));
  } else {
    yield put(deleteInvitation.failure(error));
  }
}

export function* watchFetchInvitations() {
  const subChannel = yield actionChannel(GET_INVITATIONS_REQUEST.REQUEST);
  while (true) {
    const action = yield take(subChannel);
    yield call(getInvitationsRequest, action);
  }
}

export function* watchCreateInvitation() {
  yield takeLatest(CREATE_INVITATION_REQUEST.REQUEST, createInvitationRequest);
}

export function* watchUpdateInvitation() {
  yield takeLatest(UPDATE_INVITATION_REQUEST.REQUEST, updateInvitationRequest);
}

export function* watchDeleteInvitation() {
  yield takeLatest(DELETE_INVITATION_REQUEST.REQUEST, deleteInvitationRequest);
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* rootSaga() {
  yield all([
    watchFetchBrands(),
    watchCreateBrand(),
    watchUpdateBrand(),
    watchDeleteBrand(),
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
    watchFetchMembers(),
    watchCreateMember(),
    watchUpdateMember(),
    watchDeleteMember(),
    watchFetchInvitations(),
    watchCreateInvitation(),
    watchUpdateInvitation(),
    watchDeleteInvitation(),
  ]);
}
