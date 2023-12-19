import { getAccessToken } from "..";

const baseURL = process.env.REACT_APP_BASE_URL;

async function getThreads() {
  const response = await fetch(`${baseURL}/threads`, {
    method: 'GET',
  });

  const { data } = await response.json();

  return data;
}

async function createThread(payload) {
  const response = await fetch(`${baseURL}/threads`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });

  const { data } = await response.json();

  return data;
}

async function showThread(payload) {
  const response = await fetch(`${baseURL}/threads/${payload}`, {
    method: 'GET',
  });

  return response.json();
}

export { getThreads, createThread, showThread };
