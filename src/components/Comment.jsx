import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Comment({ comment }) {
  return (
    <div className="card border-0 bg-transparent">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <img src="http://via.placeholder.com/40" className="rounded-circle" alt="" />
          <span className="fs-6 ms-3 me-auto">Name</span>
          <span className="fs-6">Date</span>
        </div>
        <span>{comment.content}</span>
        <div className="d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={['far', 'thumbs-up']} />
          <span>{comment.upVotesBy.length}</span>
          <FontAwesomeIcon icon={['far', 'thumbs-down']} />
          <span>{comment.downVotesBy.length}</span>
        </div>
      </div>
    </div>
  )
}