import {
  createComment, downVoteComment, neutralVoteComment, upVoteComment,
} from '../../api/services/comment';
import {
  downVoteThread, neutralVoteThread, showThread, upVoteThread,
} from '../../api/services/thread';

const ActionType = {
  DETAIL_THREAD: 'DETAIL_THREAD',
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
  NEUTRAL_VOTE: 'NEUTRAL_VOTE',
  ADD_COMMENT: 'ADD_COMMENT',
  COMMENT_UP_VOTE: 'COMMENT_UP_VOTE',
  COMMENT_DOWN_VOTE: 'COMMENT_DOWN_VOTE',
};

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function setDetailThreadActionCreator(thread) {
  return {
    type: ActionType.DETAIL_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE,
    payload: {
      userId,
    },
  };
}

function downVoteThreadActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE,
    payload: {
      userId,
    },
  };
}

function upVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.COMMENT_UP_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.COMMENT_DOWN_VOTE,
    payload: {
      commentId, userId,
    },
  };
}

function neutralVoteThreadActionCreator(id) {
  return {
    type: ActionType.NEUTRAL_VOTE,
    payload: {
      id,
    },
  };
}

function asyncAddCommentActionCreator({ content, id }) {
  return async (dispatch) => {
    try {
      const response = await createComment({ content, id });
      const { comment } = await response.data;

      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDetailThreadActionCreator(id) {
  return async (dispatch) => {
    try {
      const response = await showThread(id);
      const { detailThread } = response.data;

      dispatch(setDetailThreadActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThreadActionCreator(id) {
  return async (dispatch) => {
    try {
      const response = await upVoteThread(id);
      const { userId } = response.data.vote;

      dispatch(upVoteThreadActionCreator(userId));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteThreadActionCreator(id) {
  return async (dispatch) => {
    try {
      const response = await downVoteThread(id);
      const { userId } = response.data.vote;

      dispatch(downVoteThreadActionCreator(userId));
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

function asyncUpVoteCommentActionCreator(threadId, commentId) {
  return async (dispatch) => {
    try {
      const response = await upVoteComment(threadId, commentId);
      const { userId } = response.data.vote;

      dispatch(upVoteCommentActionCreator(commentId, userId));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteCommentActionCreator(threadId, commentId) {
  return async (dispatch) => {
    try {
      const response = await downVoteComment(threadId, commentId);
      const { userId } = response.data.vote;

      dispatch(downVoteCommentActionCreator(commentId, userId));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralVoteCommentActionCreator(threadId, commentId) {
  return async () => {
    try {
      await neutralVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setDetailThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  asyncDetailThreadActionCreator,
  asyncUpVoteThreadActionCreator,
  asyncDownVoteThreadActionCreator,
  asyncNeutralVoteThreadActionCreator,
  asyncAddCommentActionCreator,
  asyncUpVoteCommentActionCreator,
  asyncNeutralVoteCommentActionCreator,
  asyncDownVoteCommentActionCreator,
};
