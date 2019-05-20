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
      // Object.keys(bodyJS).forEach(key =>
      //   body.append(
      //     key,
      //     typeof bodyJS[key] !== 'object' || bodyJS[key].preview
      //       ? bodyJS[key]
      //       : JSON.stringify(bodyJS[key]),
      //   ),
      // );
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

// API to get Input Elements
export const getElementsService = type => {
  const url = `api/${type}`;
  return callApi(url, 'GET');
};

// API to create Input Elements
export const createElementService = (type, body) => {
  const url = `api/${type}`;
  if (type === 'logo' || type === 'icon') {
    return callApi(url, 'POST', body, true);
  }
  return callApi(url, 'POST', body);
};

// API to update Input Elements
export const updateElementService = (type, body) => {
  const url = `api/${type}/${body._id}`;
  return callApi(url, 'PUT', body);
};

// API to delete Input Elements
export const deleteElementService = (type, _id) => {
  const url = `api/${type}/${_id}`;
  return callApi(url, 'DELETE');
};
