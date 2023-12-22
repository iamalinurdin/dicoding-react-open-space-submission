import getLeaderboard from '../../api/services/leaderboard';

const ActionType = {
  RETRIEVE_LEADERBOARDS: 'RETRIEVE_LEADERBOARDS',
};

function setRetrieveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RETRIEVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncAddRetrieveLeaderboardsActionCreator() {
  return async (dispatch) => {
    try {
      const response = await getLeaderboard();
      const { leaderboards } = response.data;

      dispatch(setRetrieveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setRetrieveLeaderboardsActionCreator,
  asyncAddRetrieveLeaderboardsActionCreator,
};
