import { fetchWithAuth } from "../index";

const baseURL = process.env.REACT_APP_BASE_URL;

async function login(payload) {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}

async function register(payload) {
  const response = await fetch(`${baseURL}/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
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
