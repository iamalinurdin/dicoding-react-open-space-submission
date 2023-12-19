async function fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

function putAccessToken(token) {
  return localStorage.setItem('access_token', token);
}

function getAccessToken() {
  return localStorage.getItem('access_token');
}

export {
  fetchWithAuth, 
  putAccessToken, 
  getAccessToken 
}