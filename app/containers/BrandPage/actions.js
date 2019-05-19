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

function action(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

/*
 * GET INPUT_ELEMENTS
 */

export const getInputElements = {
  request: () => action(GET_INPUT_ELEMENTS_REQUEST.REQUEST),
  success: response => action(GET_INPUT_ELEMENTS_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_INPUT_ELEMENTS_REQUEST.FAILURE, { error }),
};

/*
 * CREATE INPUT_ELEMENT
 */

export const createInputElement = {
  request: inputElement =>
    action(CREATE_INPUT_ELEMENT_REQUEST.REQUEST, { inputElement }),
  success: response =>
    action(CREATE_INPUT_ELEMENT_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_INPUT_ELEMENT_REQUEST.FAILURE, { error }),
};

/*
 * UPDATE INPUT_ELEMENT
 */

export const updateInputElement = {
  request: inputElement =>
    action(UPDATE_INPUT_ELEMENT_REQUEST.REQUEST, { inputElement }),
  success: response =>
    action(UPDATE_INPUT_ELEMENT_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_INPUT_ELEMENT_REQUEST.FAILURE, { error }),
};

/*
 * DELETE INPUT_ELEMENT
 */

export const deleteInputElement = {
  request: _id => action(DELETE_INPUT_ELEMENT_REQUEST.REQUEST, { _id }),
  success: response =>
    action(DELETE_INPUT_ELEMENT_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_INPUT_ELEMENT_REQUEST.FAILURE, { error }),
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
