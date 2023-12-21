import { createComment } from "../../api/services/comment"
import { downVoteThread, showThread, upVoteThread } from "../../api/services/thread"

const ActionType = {
  DETAIL_THREAD: 'DETAIL_THREAD',
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
  ADD_COMMENT: 'ADD_COMMENT',
  COMMENT_UP_VOTE: 'COMMENT_UP_VOTE',
  COMMENT_DOWN_VOTE: 'COMMENT_DOWN_VOTE',
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    }
  }
}

function setDetailThreadActionCreator(thread) {
  return {
    type: ActionType.DETAIL_THREAD,
    payload: {
      thread
    }
  }
}

function upVoteThreadActionCreator(thread) {
  return {
    type: ActionType.UP_VOTE,
    payload: {
      thread
    }
  }
}

function downVoteThreadActionCreator(thread) {
  return {
    type: ActionType.DOWN_VOTE,
    payload: {
      thread
    }
  }
}

function upVoteCommentActionCreator(id) {
  return {
    type: ActionType.COMMENT_UP_VOTE,
    payload: {
      id
    }
  }
}

function downVoteCommentActionCreator(id) {
  return {
    type: ActionType.COMMENT_UP_VOTE,
    payload: {
      id
    }
  }
}

function neutralVoteCommentActionCreator(id) {
  return {
    type: ActionType.COMMENT_UP_VOTE,
    payload: {
      id
    }
  }
}

function asyncAddCommentActionCreator({ content, id }) {
  return async (dispatch) => {
    try {
      const response = await createComment({ content, id })
      const { comment } = await response.data

      dispatch(addCommentActionCreator(comment))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncDetailThreadActionCreator(id) {
  return async (dispatch) => {
    try {
      const response = await showThread(id)
      const { detailThread } = response.data

      dispatch(setDetailThreadActionCreator(detailThread))
    } catch (error) {
      alert(error.message);
    }
  }
}

function asyncUpVoteThreadActionCreator(id) {
  return async (dispatch) => {
    try {
      const response = await upVoteThread(id);

      console.log(response)
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncDownVoteThreadActionCreator(id) {
  return async (dispatch) => {
    try {
      const response = await downVoteThread(id);

      console.log(response)
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  setDetailThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
  asyncDetailThreadActionCreator,
  asyncUpVoteThreadActionCreator,
  asyncDownVoteThreadActionCreator,
  asyncAddCommentActionCreator
}