import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import Thread from '../components/Thread';
import Comment from '../components/Comment';
import {
  asyncAddCommentActionCreator,
  asyncDetailThreadActionCreator,
  asyncDownVoteCommentActionCreator,
  asyncNeutralVoteCommentActionCreator,
  asyncUpVoteCommentActionCreator,
  asyncDownVoteThreadActionCreator,
  asyncNeutralVoteThreadActionCreator,
  asyncUpVoteThreadActionCreator,
} from '../redux/thread/action';
import useInput from '../hooks/useInput';

export default function DetailThread() {
  const params = useParams();
  const { id } = params;
  const { thread = null } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [content, onChangeContent] = useInput();

  useEffect(() => {
    dispatch(asyncDetailThreadActionCreator(id));
  }, [dispatch, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncAddCommentActionCreator({ content, id }));
  };

  const upVoteHandler = (threadId) => {
    dispatch(asyncNeutralVoteThreadActionCreator(threadId));
    dispatch(asyncUpVoteThreadActionCreator(threadId));
  };

  const downVoteHandler = (threadId) => {
    dispatch(asyncNeutralVoteThreadActionCreator(threadId));
    dispatch(asyncDownVoteThreadActionCreator(threadId));
  };

  const upVoteCommentHandler = (threadId, commentId) => {
    dispatch(asyncNeutralVoteCommentActionCreator(threadId, commentId));
    dispatch(asyncUpVoteCommentActionCreator(threadId, commentId));
  };

  const downVoteCommentHandler = (threadId, commentId) => {
    dispatch(asyncNeutralVoteCommentActionCreator(threadId, commentId));
    dispatch(asyncDownVoteCommentActionCreator(threadId, commentId));
  };

  return (
    <>
      <Thread
        thread={thread}
        upVoteHandler={upVoteHandler}
        downVoteHandler={downVoteHandler}
      >
        <h4 className="fw-semibold">Beri komentar</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea onChange={onChangeContent} name="" id="" cols="30" rows="5" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Simpan</button>
        </form>
      </Thread>
      {thread?.comments?.map((comment) => (
        <div key={comment.id}>
          <Comment
            comment={comment}
            threadId={thread?.id}
            upVoteHandler={upVoteCommentHandler}
            downVoteHandler={downVoteCommentHandler}
          />
        </div>
      ))}
    </>
  );
}
