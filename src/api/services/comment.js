import { getAccessToken } from "..";

const baseURL = process.env.REACT_APP_BASE_URL;

async function createComment({ comment, id }) {
  console.log(comment, id)

  const response = await fetch(`${baseURL}/threads/${id}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment
    }),
  });

  const { data } = response.json();

  return data;
}

export default createComment;
