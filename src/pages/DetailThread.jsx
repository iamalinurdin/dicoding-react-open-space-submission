import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Thread from "../components/Thread";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { asyncDetailThreadActionCreator } from "../redux/thread/action";

export default function DetailThread() {
  const params = useParams();
  const { thread = null } = useSelector((state) => state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(asyncDetailThreadActionCreator(params.id))
  }, [dispatch, params]);

  return (
    <>
      <Thread thread={thread}>
        <h4 className="fw-semibold">Beri komentar</h4>
        <form>
          <div className="mb-3">
            <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
          </div>
          <button className="btn btn-primary w-100">Simpan</button>
        </form>
      </Thread>
      {thread?.comments?.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
}