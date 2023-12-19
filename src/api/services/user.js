import { fetchWithAuth } from ".";

const baseURL = process.env.REACT_APP_BASE_URL;



async function login(payload) {
  const response = await fetch(`${baseURL}/login`, {
    body: payload,
  });

  return response.json();
}

async function register(payload) {
  const response = await fetch(`${baseURL}/register`, {
    body: payload,
  });

  return response.json();
}

async function users() {
  const response = await fetch(`${baseURL}/users`, {
    method: 'GET',
  });

  return response.json();
}

async function me() {
  // const response = await fetch(`${baseURL}/users/me`, {
  //   method: 'GET',
  // });

  const response = await fetchWithAuth(`${baseURL}/users/me`);

  return response.json();
}

export {
  login, 
  register, 
  users, 
  me
};
