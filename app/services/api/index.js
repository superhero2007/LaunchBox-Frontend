// Template function to send request to backend
const createRequest = (endpoint, method, bodyJS, hasFile) => {
  const fullUrl = `${process.env.API_ENTRY_PREFIX}/${endpoint}`;
  let body;
  const headers = new Headers();
  if (localStorage.getItem('token')) {
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
  if (bodyJS !== null) {
    if (hasFile) {
      body = new FormData();
      if (Array.isArray(bodyJS.value)) {
        bodyJS.value.map(file => body.append('file', file));
      } else {
        body.append('file', bodyJS.value);
      }
    } else {
      body = JSON.stringify(bodyJS);
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
    }
  }

  return new Request(fullUrl, {
    method,
    headers,
    body,
  });
};

// Template Function to be used to response according to the template result.
const callApi = (endpoint, method = 'GET', bodyJS = null, hasFile = false) => {
  const request = createRequest(endpoint, method, bodyJS, hasFile);
  return fetch(request)
    .then(response =>
      response.json().then(json => ({
        json,
        response,
      })),
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(
          new Error({
            ...json,
            status: response.status,
          }),
        );
      }
      return Object.assign({}, json);
    })
    .then(
      response => ({
        response,
      }),
      error => ({
        error,
      }),
    )
    .catch(() => {
      // console.log('ERROR', error);
    });
};

// API to Sign Up
export const register = query => {
  const url = 'api/auth/register';
  const option = {
    email: query.query.email,
    fullName: query.query.fullName,
    companyName: query.query.companyName,
    password: query.query.password,
  };
  return callApi(url, 'POST', option);
};

// API to Log In
export const logIn = query => {
  const url = 'api/auth/login';
  const option = {
    email: query.query.email,
    password: query.query.password,
  };
  return callApi(url, 'POST', option);
};

// API to send registration email
export const registerEmail = () => {
  const url = 'api/auth/register-confirmation';
  const option = {
    token: localStorage.getItem('token'),
  };
  return callApi(url, 'POST', option);
};

// API to confirm registration email
export const registerConfirmation = query => {
  const url = `api/auth/confirmation`;
  const option = {
    token: query.token,
  };
  return callApi(url, 'POST', option);
};

// API to forgot password email
export const forgotPassword = query => {
  const url = `api/auth/reset_password_request`;
  const option = {
    email: query.email,
  };
  return callApi(url, 'POST', option);
};

// API to reset password
export const resetPassword = query => {
  const url = `api/auth/reset_password`;
  const option = {
    token: query.token,
    password: query.password,
  };
  return callApi(url, 'POST', option);
};

// API to get user from token
export const getUser = () => {
  const url = `api/user`;
  return callApi(url, 'GET');
};

// API to update user from token
export const updateUser = query => {
  const url = `api/user`;
  return callApi(url, 'POST', query.value);
};

// API to upload user's photo
export const uploadPhoto = query => {
  const url = `api/user/photo`;
  const option = {
    value: query.value,
  };
  return callApi(url, 'POST', option, true);
};

// API to delete user's photo
export const deletePhoto = () => {
  const url = `api/user/photo`;
  return callApi(url, 'DELETE');
};
