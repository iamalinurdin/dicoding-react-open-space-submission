import { ActionType } from "./action";

function authReducer(user = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.user
    case ActionType.UNSET_AUTH_USER:
      return null
    default:
      return user
  }
}

export default authReducer