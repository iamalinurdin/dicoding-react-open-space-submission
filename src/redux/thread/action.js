import { showThread } from "../../api/services/thread"

const ActionType = {
  DETAIL_THREAD: 'DETAIL_THREAD'
}

function setDetailThreadActionCreator(thread) {
  return {
    type: ActionType.DETAIL_THREAD,
    payload: {
      thread
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

export {
  ActionType,
  setDetailThreadActionCreator,
  asyncDetailThreadActionCreator,
}