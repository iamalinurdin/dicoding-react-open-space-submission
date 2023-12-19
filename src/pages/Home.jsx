import React, { useEffect } from 'react';
import Thread from '../components/Thread';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddThreadActionCreator, asyncReceiveThreadsActionCreator } from '../redux/threads/action';
import useInput from '../hooks/useInput';

export default function Home() {
  const threads = useSelector((state) => state.threads);
  const dispatch = useDispatch();
  const [body, onChangeThread] = useInput()
  const [title, onChangeTitle] = useInput()
  const [category, onChangeCategory] = useInput()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(asyncAddThreadActionCreator({title, category, body}))
  }

  useEffect(() => {
    dispatch(asyncReceiveThreadsActionCreator());
  }, [dispatch])

  return (
    <>
      <form className='border-bottom pb-3' onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="title">Title</label>
            <input onChange={onChangeTitle} type="text" id='title' className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="category">Category</label>
            <input onChange={onChangeCategory} type="text" id='category' className="form-control" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="thread">Thread</label>
          <textarea onChange={onChangeThread} id='thread' cols="30" rows="5" className="form-control" placeholder='Write your thread here...'></textarea>
        </div>
        <button type='submit' className="btn btn-primary w-100 rounded-pill">Create Thread</button>
      </form>

      {threads && threads.map((thread) => (
        <div key={thread.id} className="mb-3">
          <Thread thread={thread} />
        </div>
      ))}
    </>
  );
}
