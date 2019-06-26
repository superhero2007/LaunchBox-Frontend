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

function action(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

/*
 * GET BRANDS
 */

export const getBrands = {
  request: () => action(GET_BRANDS_REQUEST.REQUEST),
  success: response => action(GET_BRANDS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_BRANDS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE BRAND
 */

export const createBrand = {
  request: brand => action(CREATE_BRAND_REQUEST.REQUEST, { brand }),
  success: response => action(CREATE_BRAND_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_BRAND_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE BRAND
 */

export const updateBrand = {
  request: brand => action(UPDATE_BRAND_REQUEST.REQUEST, { brand }),
  success: response => action(UPDATE_BRAND_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_BRAND_REQUEST.FAILURE, { error }),
};

/*
 * DELETE BRAND
 */

export const deleteBrand = {
  request: _id => action(DELETE_BRAND_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_BRAND_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_BRAND_REQUEST.FAILURE, { error }),
};

/*
 * GET PRESENCES
 */

export const getPresences = {
  request: () => action(GET_PRESENCES_REQUEST.REQUEST),
  success: response => action(GET_PRESENCES_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_PRESENCES_REQUEST.FAILURE, { error }),
};

/*
 * CREATE PRESENCE
 */

export const createPresence = {
  request: presence => action(CREATE_PRESENCE_REQUEST.REQUEST, { presence }),
  success: response => action(CREATE_PRESENCE_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_PRESENCE_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE PRESENCE
 */

export const updatePresence = {
  request: presence => action(UPDATE_PRESENCE_REQUEST.REQUEST, { presence }),
  success: response => action(UPDATE_PRESENCE_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_PRESENCE_REQUEST.FAILURE, { error }),
};

/*
 * DELETE PRESENCE
 */

export const deletePresence = {
  request: _id => action(DELETE_PRESENCE_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_PRESENCE_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_PRESENCE_REQUEST.FAILURE, { error }),
};

/*
 * GET LOGOS
 */

export const getLogos = {
  request: () => action(GET_LOGOS_REQUEST.REQUEST),
  success: response => action(GET_LOGOS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_LOGOS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE LOGO
 */

export const createLogo = {
  request: logo => action(CREATE_LOGO_REQUEST.REQUEST, { logo }),
  success: response => action(CREATE_LOGO_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_LOGO_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE LOGO
 */

export const updateLogo = {
  request: logo => action(UPDATE_LOGO_REQUEST.REQUEST, { logo }),
  success: response => action(UPDATE_LOGO_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_LOGO_REQUEST.FAILURE, { error }),
};

/*
 * DELETE LOGO
 */

export const deleteLogo = {
  request: _id => action(DELETE_LOGO_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_LOGO_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_LOGO_REQUEST.FAILURE, { error }),
};

/*
 * GET FONTS
 */

export const getFonts = {
  request: () => action(GET_FONTS_REQUEST.REQUEST),
  success: response => action(GET_FONTS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_FONTS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE FONT
 */

export const createFont = {
  request: font => action(CREATE_FONT_REQUEST.REQUEST, { font }),
  success: response => action(CREATE_FONT_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_FONT_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE FONT
 */

export const updateFont = {
  request: font => action(UPDATE_FONT_REQUEST.REQUEST, { font }),
  success: response => action(UPDATE_FONT_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_FONT_REQUEST.FAILURE, { error }),
};

/*
 * DELETE FONT
 */

export const deleteFont = {
  request: _id => action(DELETE_FONT_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_FONT_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_FONT_REQUEST.FAILURE, { error }),
};

/*
 * GET FONT_COLORS
 */

export const getFontColors = {
  request: () => action(GET_FONT_COLORS_REQUEST.REQUEST),
  success: response => action(GET_FONT_COLORS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_FONT_COLORS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE FONT_COLOR
 */

export const createFontColor = {
  request: fontColor =>
    action(CREATE_FONT_COLOR_REQUEST.REQUEST, { fontColor }),
  success: response => action(CREATE_FONT_COLOR_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_FONT_COLOR_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE FONT_COLOR
 */

export const updateFontColor = {
  request: fontColor =>
    action(UPDATE_FONT_COLOR_REQUEST.REQUEST, { fontColor }),
  success: response => action(UPDATE_FONT_COLOR_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_FONT_COLOR_REQUEST.FAILURE, { error }),
};

/*
 * DELETE FONT_COLOR
 */

export const deleteFontColor = {
  request: _id => action(DELETE_FONT_COLOR_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_FONT_COLOR_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_FONT_COLOR_REQUEST.FAILURE, { error }),
};

/*
 * GET BRAND_COLORS
 */

export const getBrandColors = {
  request: () => action(GET_BRAND_COLORS_REQUEST.REQUEST),
  success: response => action(GET_BRAND_COLORS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_BRAND_COLORS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE BRAND_COLOR
 */

export const createBrandColor = {
  request: brandColor =>
    action(CREATE_BRAND_COLOR_REQUEST.REQUEST, { brandColor }),
  success: response => action(CREATE_BRAND_COLOR_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_BRAND_COLOR_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE BRAND_COLOR
 */

export const updateBrandColor = {
  request: brandColor =>
    action(UPDATE_BRAND_COLOR_REQUEST.REQUEST, { brandColor }),
  success: response => action(UPDATE_BRAND_COLOR_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_BRAND_COLOR_REQUEST.FAILURE, { error }),
};

/*
 * DELETE BRAND_COLOR
 */

export const deleteBrandColor = {
  request: _id => action(DELETE_BRAND_COLOR_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_BRAND_COLOR_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_BRAND_COLOR_REQUEST.FAILURE, { error }),
};

/*
 * GET ICONS
 */

export const getIcons = {
  request: () => action(GET_ICONS_REQUEST.REQUEST),
  success: response => action(GET_ICONS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_ICONS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE ICON
 */

export const createIcon = {
  request: icon => action(CREATE_ICON_REQUEST.REQUEST, { icon }),
  success: response => action(CREATE_ICON_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_ICON_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE ICON
 */

export const updateIcon = {
  request: icon => action(UPDATE_ICON_REQUEST.REQUEST, { icon }),
  success: response => action(UPDATE_ICON_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_ICON_REQUEST.FAILURE, { error }),
};

/*
 * DELETE ICON
 */

export const deleteIcon = {
  request: _id => action(DELETE_ICON_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_ICON_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_ICON_REQUEST.FAILURE, { error }),
};

/*
 * GET MEMBERS
 */

export const getMembers = {
  request: () => action(GET_MEMBERS_REQUEST.REQUEST),
  success: response => action(GET_MEMBERS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_MEMBERS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE MEMBER
 */

export const createMember = {
  request: member => action(CREATE_MEMBER_REQUEST.REQUEST, { member }),
  success: response => action(CREATE_MEMBER_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_MEMBER_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE MEMBER
 */

export const updateMember = {
  request: member => action(UPDATE_MEMBER_REQUEST.REQUEST, { member }),
  success: response => action(UPDATE_MEMBER_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_MEMBER_REQUEST.FAILURE, { error }),
};

/*
 * DELETE MEMBER
 */

export const deleteMember = {
  request: _id => action(DELETE_MEMBER_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_MEMBER_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_MEMBER_REQUEST.FAILURE, { error }),
};

/*
 * GET INVITATIONS
 */

export const getInvitations = {
  request: () => action(GET_INVITATIONS_REQUEST.REQUEST),
  success: response => action(GET_INVITATIONS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_INVITATIONS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE INVITATION
 */

export const createInvitation = {
  request: invitation =>
    action(CREATE_INVITATION_REQUEST.REQUEST, { invitation }),
  success: response => action(CREATE_INVITATION_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_INVITATION_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE INVITATION
 */

export const updateInvitation = {
  request: invitation =>
    action(UPDATE_INVITATION_REQUEST.REQUEST, { invitation }),
  success: response => action(UPDATE_INVITATION_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_INVITATION_REQUEST.FAILURE, { error }),
};

/*
 * DELETE INVITATION
 */

export const deleteInvitation = {
  request: _id => action(DELETE_INVITATION_REQUEST.REQUEST, { _id }),
  success: response => action(DELETE_INVITATION_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_INVITATION_REQUEST.FAILURE, { error }),
};
