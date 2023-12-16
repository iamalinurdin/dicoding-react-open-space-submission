const baseURL = process.env.REACT_APP_BASE_URL;

async function getThreads() {
  const response = await fetch(`${baseURL}/threads`, {
    method: 'GET',
  });

  return response.json();
}

async function createThread(payload) {
  const response = await fetch(`${baseURL}/threads`, {
    method: 'POST',
    body: payload,
  });

  return response.json();
}

async function showThread(payload) {
  const response = await fetch(`${baseURL}/threads/${payload}`, {
    method: 'GET',
  });

  return response.json();
}

export { getThreads, createThread, showThread };
