import { putAccessToken } from "../../api"
import { login, me } from "../../api/user"

const ActionType = {
  LOGIN: 'LOGIN',
  RECEIVE_USERS: 'RECEIVE_USERS',
  SET_OWN_PROFILE: 'SET_OWN_PROFILE',
}

function setUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users
    }
  }
}

function setOwnProfileActionCreator(user) {
  return {
    type: ActionType.SET_OWN_PROFILE,
    payload: {
      user
    }
  }
}

function setLoginActionCreator(user) {
  return {
    type: ActionType.LOGIN,
    payload: {
      user
    }
  }
}

function asyncLoginActionCreator({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await login({ email, password })
      putAccessToken(token)
      const profile = await me()

      dispatch(setLoginActionCreator(profile))
    } catch (error) {
      alert(error.message)
    }
  }
}