import { fromJS } from 'immutable';

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

export const initialState = fromJS({
  inputElements: [],
  presences: [],
  logos: [],
  fonts: [],
  fontColors: [],
  brandColors: [],
  icons: [],
});

function BrandReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INPUT_ELEMENTS_REQUEST.SUCCESS:
      return state.set('inputElements', fromJS(action.response.inputElements));
    case CREATE_INPUT_ELEMENT_REQUEST.SUCCESS:
      return state.update('inputElements', inputElements =>
        inputElements.push(action.response.inputElement),
      );
    case UPDATE_INPUT_ELEMENT_REQUEST.SUCCESS:
      return state.update('inputElements', inputElements => {
        const elements = inputElements.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.inputElement._id,
        );
        elements[index] = action.response.inputElement;
        return fromJS(elements);
      });
    case DELETE_INPUT_ELEMENT_REQUEST.SUCCESS:
      return state.update('inputElements', inputElements =>
        fromJS(
          inputElements
            .toJS()
            .filter(inputElement => inputElement._id !== action.response._id),
        ),
      );
    case GET_PRESENCES_REQUEST.SUCCESS:
      return state.set('presences', fromJS(action.response.presences));
    case CREATE_PRESENCE_REQUEST.SUCCESS:
      return state.update('presences', presences =>
        presences.push(action.response.presence),
      );
    case UPDATE_PRESENCE_REQUEST.SUCCESS:
      return state.update('presences', presences => {
        const elements = presences.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.presence._id,
        );
        elements[index] = action.response.presence;
        return fromJS(elements);
      });
    case DELETE_PRESENCE_REQUEST.SUCCESS:
      return state.update('presences', presences =>
        fromJS(
          presences
            .toJS()
            .filter(presence => presence._id !== action.response._id),
        ),
      );
    case GET_LOGOS_REQUEST.SUCCESS:
      return state.set('logos', fromJS(action.response.logos));
    case CREATE_LOGO_REQUEST.SUCCESS:
      return state.update('logos', logos => logos.push(action.response.logo));
    case UPDATE_LOGO_REQUEST.SUCCESS:
      return state.update('logos', logos => {
        const elements = logos.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.logo._id,
        );
        elements[index] = action.response.logo;
        return fromJS(elements);
      });
    case DELETE_LOGO_REQUEST.SUCCESS:
      return state.update('logos', logos =>
        fromJS(logos.toJS().filter(logo => logo._id !== action.response._id)),
      );
    case GET_FONTS_REQUEST.SUCCESS:
      return state.set('fonts', fromJS(action.response.fonts));
    case CREATE_FONT_REQUEST.SUCCESS:
      return state.update('fonts', fonts => fonts.push(action.response.font));
    case UPDATE_FONT_REQUEST.SUCCESS:
      return state.update('fonts', fonts => {
        const elements = fonts.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.font._id,
        );
        elements[index] = action.response.font;
        return fromJS(elements);
      });
    case DELETE_FONT_REQUEST.SUCCESS:
      return state.update('fonts', fonts =>
        fromJS(fonts.toJS().filter(font => font._id !== action.response._id)),
      );
    case GET_FONT_COLORS_REQUEST.SUCCESS:
      return state.set('fontColors', fromJS(action.response.fontColors));
    case CREATE_FONT_COLOR_REQUEST.SUCCESS:
      return state.update('fontColors', fontColors =>
        fontColors.push(action.response.fontColor),
      );
    case UPDATE_FONT_COLOR_REQUEST.SUCCESS:
      return state.update('fontColors', fontColors => {
        const elements = fontColors.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.fontColor._id,
        );
        elements[index] = action.response.fontColor;
        return fromJS(elements);
      });
    case DELETE_FONT_COLOR_REQUEST.SUCCESS:
      return state.update('fonts', fontColors =>
        fromJS(
          fontColors
            .toJS()
            .filter(fontColor => fontColor._id !== action.response._id),
        ),
      );
    case GET_BRAND_COLORS_REQUEST.SUCCESS:
      return state.set('brandColors', fromJS(action.response.brandColors));
    case CREATE_BRAND_COLOR_REQUEST.SUCCESS:
      return state.update('brandColors', brandColors =>
        brandColors.push(action.response.brandColor),
      );
    case UPDATE_BRAND_COLOR_REQUEST.SUCCESS:
      return state.update('brandColors', brandColors => {
        const elements = brandColors.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.brandColor._id,
        );
        elements[index] = action.response.brandColor;
        return fromJS(elements);
      });
    case DELETE_BRAND_COLOR_REQUEST.SUCCESS:
      return state.update('brands', brandColors =>
        fromJS(
          brandColors
            .toJS()
            .filter(brandColor => brandColor._id !== action.response._id),
        ),
      );
    case GET_ICONS_REQUEST.SUCCESS:
      return state.set('icons', fromJS(action.response.icons));
    case CREATE_ICON_REQUEST.SUCCESS:
      return state.update('icons', icons => icons.push(action.response.icon));
    case UPDATE_ICON_REQUEST.SUCCESS:
      return state.update('icons', icons => {
        const elements = icons.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.icon._id,
        );
        elements[index] = action.response.icon;
        return fromJS(elements);
      });
    case DELETE_ICON_REQUEST.SUCCESS:
      return state.update('icons', icons =>
        fromJS(icons.toJS().filter(icon => icon._id !== action.response._id)),
      );
    default:
      return state;
  }
}

export default BrandReducer;
