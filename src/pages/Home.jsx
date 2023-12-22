import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Thread from '../components/Thread';
import {
  asyncAddThreadActionCreator,
  asyncDownVoteThreadActionCreator,
  asyncNeutralVoteThreadActionCreator,
  asyncReceiveThreadsActionCreator,
  asyncUpVoteThreadActionCreator,
} from '../redux/threads/action';
import useInput from '../hooks/useInput';

export default function Home() {
  const threads = useSelector((state) => state.threads);
  const dispatch = useDispatch();
  const [body, onChangeThread] = useInput();
  const [title, onChangeTitle] = useInput();
  const [category, onChangeCategory] = useInput();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncAddThreadActionCreator({ title, category, body }));
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadsActionCreator());
  }, [dispatch]);

  const upVoteHandler = (id) => {
    dispatch(asyncNeutralVoteThreadActionCreator(id));
    dispatch(asyncUpVoteThreadActionCreator(id));
  };

  const downVoteHandler = (id) => {
    dispatch(asyncNeutralVoteThreadActionCreator(id));
    dispatch(asyncDownVoteThreadActionCreator(id));
  };

  return (
    <>
      <form className="border-bottom pb-3" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="title">
              Title
              <input onChange={onChangeTitle} type="text" id="title" className="form-control" />
            </label>
          </div>
          <div className="col">
            <label htmlFor="category">
              Category
              <input onChange={onChangeCategory} type="text" id="category" className="form-control" />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="thread">
            Thread
            <textarea onChange={onChangeThread} id="thread" cols="30" rows="5" className="form-control" placeholder="Write your thread here..." />
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">Create Thread</button>
      </form>

      {threads && threads.map((thread) => (
        <div key={thread.id} className="mb-3">
          <Thread thread={thread} upVoteHandler={upVoteHandler} downVoteHandler={downVoteHandler} />
        </div>
      ))}
    </>
  );
}
