import { me } from '../../api/services/user';
import { setAuthUserActionCreator } from '../auth/action';
import { asyncRetrieveUsersActionCreator } from '../users/action';

const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD',
};

function setPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      const profile = await me();
      const { user } = profile.data;

      dispatch(asyncRetrieveUsersActionCreator());
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setPreloadActionCreator(false));
    }
  };
}

export {
  ActionType,
  asyncPreloadProcess,
  setPreloadActionCreator,
};
