import { getAccessToken } from '..';

const baseURL = process.env.REACT_APP_BASE_URL;

async function createComment({ content, id }) {
  const response = await fetch(`${baseURL}/threads/${id}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  });

  return response.json();
}

async function upVoteComment(threadId, commentId) {
  const response = await fetch(`${baseURL}/threads/${threadId}/comments/${commentId}/up-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

async function downVoteComment(threadId, commentId) {
  const response = await fetch(`${baseURL}/threads/${threadId}/comments/${commentId}/down-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

async function neutralVoteComment(threadId, commentId) {
  const response = await fetch(`${baseURL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

export {
  createComment,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
};
