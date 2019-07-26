const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const createRequestTypes = base => {
  const res = {};
  // eslint-disable-next-line
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `app/Api/${base}_${type}`);
  return res;
};

export const GET_BRANDS_REQUEST = createRequestTypes('GET_BRANDS');
export const CREATE_BRAND_REQUEST = createRequestTypes('CREATE_BRAND');
export const UPDATE_BRAND_REQUEST = createRequestTypes('UPDATE_BRAND');
export const DELETE_BRAND_REQUEST = createRequestTypes('DELETE_BRAND');

export const GET_PRESENCES_REQUEST = createRequestTypes('GET_PRESENCES');
export const CREATE_PRESENCE_REQUEST = createRequestTypes('CREATE_PRESENCE');
export const UPDATE_PRESENCE_REQUEST = createRequestTypes('UPDATE_PRESENCE');
export const DELETE_PRESENCE_REQUEST = createRequestTypes('DELETE_PRESENCE');

export const GET_LOGOS_REQUEST = createRequestTypes('GET_LOGOS');
export const CREATE_LOGO_REQUEST = createRequestTypes('CREATE_LOGO');
export const UPDATE_LOGO_REQUEST = createRequestTypes('UPDATE_LOGO');
export const DELETE_LOGO_REQUEST = createRequestTypes('DELETE_LOGO');

export const GET_FONTS_REQUEST = createRequestTypes('GET_FONTS');
export const CREATE_FONT_REQUEST = createRequestTypes('CREATE_FONT');
export const UPDATE_FONT_REQUEST = createRequestTypes('UPDATE_FONT');
export const DELETE_FONT_REQUEST = createRequestTypes('DELETE_FONT');

export const GET_FONT_COLORS_REQUEST = createRequestTypes('GET_FONT_COLORS');
export const CREATE_FONT_COLOR_REQUEST = createRequestTypes(
  'CREATE_FONT_COLOR',
);
export const UPDATE_FONT_COLOR_REQUEST = createRequestTypes(
  'UPDATE_FONT_COLOR',
);
export const DELETE_FONT_COLOR_REQUEST = createRequestTypes(
  'DELETE_FONT_COLOR',
);

export const GET_BRAND_COLORS_REQUEST = createRequestTypes('GET_BRAND_COLORS');
export const CREATE_BRAND_COLOR_REQUEST = createRequestTypes(
  'CREATE_BRAND_COLOR',
);
export const UPDATE_BRAND_COLOR_REQUEST = createRequestTypes(
  'UPDATE_BRAND_COLOR',
);
export const DELETE_BRAND_COLOR_REQUEST = createRequestTypes(
  'DELETE_BRAND_COLOR',
);

export const GET_ICONS_REQUEST = createRequestTypes('GET_ICONS');
export const CREATE_ICON_REQUEST = createRequestTypes('CREATE_ICON');
export const UPDATE_ICON_REQUEST = createRequestTypes('UPDATE_ICON');
export const DELETE_ICON_REQUEST = createRequestTypes('DELETE_ICON');

export const GET_MEMBERS_REQUEST = createRequestTypes('GET_MEMBERS');
export const CREATE_MEMBER_REQUEST = createRequestTypes('CREATE_MEMBER');
export const UPDATE_MEMBER_REQUEST = createRequestTypes('UPDATE_MEMBER');
export const DELETE_MEMBER_REQUEST = createRequestTypes('DELETE_MEMBER');

export const GET_INVITATIONS_REQUEST = createRequestTypes('GET_INVITATIONS');
export const CREATE_INVITATION_REQUEST = createRequestTypes(
  'CREATE_INVITATION',
);
export const UPDATE_INVITATION_REQUEST = createRequestTypes(
  'UPDATE_INVITATION',
);
export const DELETE_INVITATION_REQUEST = createRequestTypes(
  'DELETE_INVITATION',
);
