// Template function to send request to backend
const createRequest = (endpoint, method, bodyJS, hasFile) => {
  const fullUrl = `${process.env.API_ENTRY_PREFIX}/${endpoint}`;
  let body;
  const headers = new Headers();
  if (bodyJS !== null) {
    if (hasFile) {
      body = new FormData();
      Object.keys(bodyJS).forEach(key =>
        body.append(
          key,
          typeof bodyJS[key] !== 'object' || bodyJS[key].preview
            ? bodyJS[key]
            : JSON.stringify(bodyJS[key]),
        ),
      );
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
    .catch(reason => {
      console.log('ERROR', reason);
    });
};

// API to Sign Up
export const register = query => {
  const url = 'signUp';
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
  const url = 'login';
  const option = {
    email: query.query.email,
    password: query.query.password,
  };
  return callApi(url, 'POST', option);
};

// API to send registration email
export const registerEmail = () => {
  const url = 'registration-email';
  return callApi(url, 'POST');
};
