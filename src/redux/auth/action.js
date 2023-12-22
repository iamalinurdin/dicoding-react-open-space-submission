import { putAccessToken } from '../../api';
import { login, me, register } from '../../api/services/user';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(user) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      user,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      user: null,
    },
  };
}

function asyncSetAuthUserActionCreator(payload) {
  return async (dispatch) => {
    try {
      const response = await login(payload);
      const { token } = response.data;

      putAccessToken(token);

      const profile = await me();
      const { user } = profile.data;

      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnsetAuthUserActionCreator() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    putAccessToken('');
  };
}

function asyncRegisterActionCreator(payload) {
  return async () => {
    try {
      await register(payload);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUserActionCreator,
  asyncUnsetAuthUserActionCreator,
  asyncRegisterActionCreator,
};
