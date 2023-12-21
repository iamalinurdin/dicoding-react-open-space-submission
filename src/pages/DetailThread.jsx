import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Thread from "../components/Thread";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddCommentActionCreator, asyncDetailThreadActionCreator } from "../redux/thread/action";
import useInput from '../hooks/useInput';

export default function DetailThread() {
  const params = useParams();
  const id = params.id
  const { thread = null } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [content, onChangeContent] = useInput()

  useEffect(() => {
    dispatch(asyncDetailThreadActionCreator(id))
  }, [dispatch, id]);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(content)
    dispatch(asyncAddCommentActionCreator({ content, id }))
  }

  return (
    <>
      <Thread thread={thread}>
        <h4 className="fw-semibold">Beri komentar</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea onChange={onChangeContent} name="" id="" cols="30" rows="5" className="form-control"></textarea>
          </div>
          <button className="btn btn-primary w-100">Simpan</button>
        </form>
      </Thread>
      {thread?.comments?.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </>
  );
}