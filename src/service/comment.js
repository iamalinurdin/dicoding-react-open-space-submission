const baseURL = process.env.REACT_APP_BASE_URL;

async function createComment(payload, id) {
  const response = await fetch(`${baseURL}/threads/${id}/comments`, {
    method: 'POST',
    body: payload,
  });

  const { data } = response.json();

  console.log(data);

  return data;
}

export default createComment;
