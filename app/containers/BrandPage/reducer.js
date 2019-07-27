import { fromJS } from 'immutable';

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

export const initialState = fromJS({
  brands: [],
  presences: [],
  logos: [],
  fonts: [],
  fontColors: [],
  brandColors: [],
  icons: [],
  members: [],
  invitations: [],
  loading: false,
  error: false,
});

function BrandReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case GET_BRANDS_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('brands', fromJS(action.response.brands));
    case GET_BRANDS_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);
    case CREATE_BRAND_REQUEST.SUCCESS:
      return state.update('brands', brands =>
        brands.push(action.response.brand),
      );
    case UPDATE_BRAND_REQUEST.SUCCESS:
      return state.update('brands', brands => {
        const elements = brands.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.brand._id,
        );
        elements[index] = action.response.brand;
        return fromJS(elements);
      });
    case DELETE_BRAND_REQUEST.REQUEST:
      return state.set('loading', true).set('error', false);
    case DELETE_BRAND_REQUEST.SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .update('brands', brands =>
          fromJS(
            brands.toJS().filter(brand => brand._id !== action.response._id),
          ),
        );
    case DELETE_BRAND_REQUEST.FAILURE:
      return state.set('loading', false).set('error', action.error);
    case GET_PRESENCES_REQUEST.SUCCESS:
      return state.set('presences', fromJS(action.response.presences));
    case CREATE_PRESENCE_REQUEST.SUCCESS:
    case UPDATE_PRESENCE_REQUEST.SUCCESS:
    case DELETE_PRESENCE_REQUEST.SUCCESS:
      return state.update('brands', brands => {
        const elements = brands.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.brand._id,
        );
        elements[index] = action.response.brand;
        return fromJS(elements);
      });
    case GET_LOGOS_REQUEST.SUCCESS:
      return state.set('logos', fromJS(action.response.logos));
    case CREATE_LOGO_REQUEST.SUCCESS:
    case UPDATE_LOGO_REQUEST.SUCCESS:
    case DELETE_LOGO_REQUEST.SUCCESS:
      return state.update('brands', brands => {
        const elements = brands.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.brand._id,
        );
        elements[index] = action.response.brand;
        return fromJS(elements);
      });
    case GET_FONTS_REQUEST.SUCCESS:
      return state.set('fonts', fromJS(action.response.fonts));
    case CREATE_FONT_REQUEST.SUCCESS:
    case UPDATE_FONT_REQUEST.SUCCESS:
    case DELETE_FONT_REQUEST.SUCCESS:
      return state.update('brands', brands => {
        const elements = brands.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.brand._id,
        );
        elements[index] = action.response.brand;
        return fromJS(elements);
      });
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
      return state.update('fontColors', fontColors =>
        fromJS(
          fontColors
            .toJS()
            .filter(fontColor => fontColor._id !== action.response._id),
        ),
      );
    case GET_BRAND_COLORS_REQUEST.SUCCESS:
      return state.set('brandColors', fromJS(action.response.brandColors));
    case CREATE_BRAND_COLOR_REQUEST.SUCCESS:
    case UPDATE_BRAND_COLOR_REQUEST.SUCCESS:
    case DELETE_BRAND_COLOR_REQUEST.SUCCESS:
      return state.update('brands', brands => {
        const elements = brands.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.brand._id,
        );
        elements[index] = action.response.brand;
        return fromJS(elements);
      });

    case GET_ICONS_REQUEST.SUCCESS:
      return state.set('icons', fromJS(action.response.icons));
    case CREATE_ICON_REQUEST.SUCCESS:
    case UPDATE_ICON_REQUEST.SUCCESS:
    case DELETE_ICON_REQUEST.SUCCESS:
      return state.update('brands', brands => {
        const elements = brands.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.brand._id,
        );
        elements[index] = action.response.brand;
        return fromJS(elements);
      });

    case GET_MEMBERS_REQUEST.SUCCESS:
      return state.set('members', fromJS(action.response.members));
    case CREATE_MEMBER_REQUEST.SUCCESS:
      return state.update('members', members =>
        members.push(action.response.member),
      );
    case UPDATE_MEMBER_REQUEST.SUCCESS:
      return state.update('members', members => {
        const elements = members.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.member._id,
        );
        elements[index] = action.response.member;
        return fromJS(elements);
      });
    case DELETE_MEMBER_REQUEST.SUCCESS:
      return state.update('members', members =>
        fromJS(
          members.toJS().filter(member => member._id !== action.response._id),
        ),
      );

    case GET_INVITATIONS_REQUEST.SUCCESS:
      return state.set('invitations', fromJS(action.response.invitations));
    case CREATE_INVITATION_REQUEST.SUCCESS:
      return state.update('invitations', invitations =>
        invitations.push(action.response.invitation),
      );
    case UPDATE_INVITATION_REQUEST.SUCCESS:
      return state.update('invitations', invitations => {
        const elements = invitations.toJS();
        const index = elements.findIndex(
          element => element._id === action.response.invitation._id,
        );
        elements[index] = action.response.invitation;
        return fromJS(elements);
      });
    case DELETE_INVITATION_REQUEST.SUCCESS:
      return state.update('invitations', invitations =>
        fromJS(
          invitations
            .toJS()
            .filter(invitation => invitation._id !== action.response._id),
        ),
      );
    default:
      return state;
  }
}

export default BrandReducer;
