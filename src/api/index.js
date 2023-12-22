function putAccessToken(token) {
  return localStorage.setItem('access_token', token);
}

function getAccessToken() {
  return localStorage.getItem('access_token');
}

async function fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

export {
  fetchWithAuth,
  putAccessToken,
  getAccessToken,
};
