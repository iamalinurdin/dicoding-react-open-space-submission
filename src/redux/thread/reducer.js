import { ActionType } from "./action";

function threadReducer(thread = {}, action = {}) {
  switch (action.type) {
    case ActionType.DETAIL_THREAD:
      return action.payload.thread
    case ActionType.UP_VOTE:
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.includes(action.payload.userId)
          ? thread.upVotesBy.filter((item) => item !== action.payload.userId)
          : thread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: thread.downVotesBy.filter((item) => item !== action.payload.userId)
      }
    case ActionType.DOWN_VOTE:
      return {
        ...thread,
        downVotesBy: thread.downVotesBy.includes(action.payload.userId)
          ? thread.downVotesBy.filter((item) => item !== action.payload.userId)
          : thread.downVotesBy.concat([action.payload.userId]),
        upVotesBy: thread.upVotesBy.filter((item) => item !== action.payload.userId)
      }
    case ActionType.ADD_COMMENT:
      return {
        ...thread,
        comments: [action.payload.comment, ...thread.comments]
      }
    case ActionType.COMMENT_UP_VOTE:
      return {
        ...thread,
        comments: thread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: (comment.upVotesBy.includes(action.payload.userId))
                ? comment.upVotesBy.filter((item) => item !== action.payload.userId)
                : comment.upVotesBy.concat([action.payload.userId]),
              downVotesBy: comment.downVotesBy.filter((item) => item !== action.payload.userId)
            }
          }

          return comment
        })
      }
    case ActionType.COMMENT_DOWN_VOTE:
      return {
        ...thread,
        comments: thread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: (comment.downVotesBy.includes(action.payload.userId))
                ? comment.downVotesBy.filter((item) => item !== action.payload.userId)
                : comment.downVotesBy.concat([action.payload.userId]),
              upVotesBy: comment.upVotesBy.filter((item) => item !== action.payload.userId)
            }
          }

          return comment
        })
      }
    default:
      return thread
  }
}

export default threadReducer