const baseURL = process.env.REACT_APP_BASE_URL;

async function getLeaderboard() {
  const response = await fetch(`${baseURL}/leaderboards`)

  return response.json()
}

export {
  getLeaderboard
}