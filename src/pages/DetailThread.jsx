import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showThread } from "../service/thread";
import Thread from "../components/Thread";
import Comment from "../components/Comment";

export default function DetailThread() {
  const params = useParams();
  const [thread, setThread] = useState(null);

  useEffect(() => {
    showThread(params.id).then((response) => setThread(response.data.detailThread));

  }, []);

  return (
    <>
      {thread && (
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
          {thread.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </>

      )}
    </>
  );
}