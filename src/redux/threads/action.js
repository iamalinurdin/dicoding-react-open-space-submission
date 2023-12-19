import { createThread, getThreads } from "../../api/services/thread"

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD'
}

function setReceiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  }
}

function asyncReceiveThreadsActionCreator() {
  return async (dispatch) => {
    try {
      const { threads } = await getThreads()

      dispatch(setReceiveThreadsActionCreator(threads))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncAddThreadActionCreator({ title, category, body }) {
  return async (dispatch) => {
    try {
      const response = await createThread({ title, category, body })
      const { thread } = response

      dispatch(addThreadActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  setReceiveThreadsActionCreator,
  addThreadActionCreator,
  asyncReceiveThreadsActionCreator,
  asyncAddThreadActionCreator
}