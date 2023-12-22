import {
  createThread, downVoteThread, getThreads, neutralVoteThread, upVoteThread,
} from '../../api/services/thread';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
};

function setReceiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.UP_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.DOWN_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncReceiveThreadsActionCreator() {
  return async (dispatch) => {
    try {
      const { threads } = await getThreads();

      dispatch(setReceiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddThreadActionCreator({ title, category, body }) {
  return async (dispatch) => {
    try {
      const response = await createThread({ title, category, body });
      const { thread } = response;

      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThreadActionCreator(threadId) {
  return async (dispatch) => {
    try {
      const response = await upVoteThread(threadId);
      const { userId } = response.data.vote;

      dispatch(upVoteThreadActionCreator(threadId, userId));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteThreadActionCreator(threadId) {
  return async (dispatch) => {
    try {
      const response = await downVoteThread(threadId);
      const { userId } = response.data.vote;

      dispatch(downVoteThreadActionCreator(threadId, userId));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralVoteThreadActionCreator(id) {
  return async () => {
    try {
      await neutralVoteThread(id);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setReceiveThreadsActionCreator,
  addThreadActionCreator,
  asyncReceiveThreadsActionCreator,
  asyncAddThreadActionCreator,
  asyncUpVoteThreadActionCreator,
  asyncDownVoteThreadActionCreator,
  asyncNeutralVoteThreadActionCreator,
};
