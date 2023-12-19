import { downVoteThread, showThread, upVoteThread } from "../../api/services/thread"

const ActionType = {
  DETAIL_THREAD: 'DETAIL_THREAD',
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
  // FIND_UP_VOTE: 'FIND_UP_VOTE',
  // FIND_DOWN_VOTE: 'FIND_DOWN_VOTE',
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

// function findUpVoteThreadActionCreator(thread, userId) {
//   return {
//     type: ActionType.FIND_UP_VOTE,
//     payload: {
//       thread,
//       userId
//     }
//   }
// }

// function findDownVoteThreadActionCreator(id) {
//   return {
//     type: ActionType.FIND_DOWN_VOTE,
//     payload: {
//       id
//     }
//   }
// }

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
  // findUpVoteThreadActionCreator,
  // findDownVoteThreadActionCreator,
  asyncDetailThreadActionCreator,
  asyncUpVoteThreadActionCreator,
  asyncDownVoteThreadActionCreator,
}