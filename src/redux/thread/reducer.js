import { ActionType } from "./action";

function threadReducer(thread = {}, action = {}) {
  switch (action.type) {
    case ActionType.DETAIL_THREAD:
      return action.payload.thread
    case ActionType.UP_VOTE:
      return action.payload.thread
    case ActionType.DOWN_VOTE:
      return action.payload.thread
    // case ActionType.FIND_UP_VOTE:
    //   // console.log(action.payload.thread, action.payload.userId)

    //   const userVoted = action.payload.thread.upVotesBy.find((userId) => userId === action.payload.userId )

    //   // console.log(userVoted)

    //   return {
    //     ...action.payload.thread,
    //     isVoted: userVoted ? true : false
    //   }
    // case ActionType.FIND_DOWN_VOTE:
    //   return action.payload.thread
    default:
      return thread
  }
}

export default threadReducer