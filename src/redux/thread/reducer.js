import { ActionType } from "./action";

function threadReducer(thread = {}, action = {}) {
  switch (action.type) {
    case ActionType.DETAIL_THREAD:
      return action.payload.thread
    default:
      return thread
  }
}

export default threadReducer