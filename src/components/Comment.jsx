import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { fullDatetime } from "../utils/datetime";

export default function Comment({ comment, threadId, upVoteHandler, downVoteHandler }) {
  const { auth, } = useSelector((state) => state)
  const isUpVoted = comment?.upVotesBy?.includes(auth.id)
  const isDownVoted = comment?.downVotesBy?.includes(auth.id)
  
  return (
    <div className="card border-0 bg-transparent">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <img src={comment.owner.avatar} width={40} className="rounded-circle" alt="" />
          <span className="fs-6 ms-3 me-auto">{comment.owner.name}</span>
          <span className='small text-muted'>{fullDatetime(comment.createdAt)}</span>
        </div>
        <span>{comment.content}</span>
        <div className="d-flex align-items-center gap-2">
          <FontAwesomeIcon 
            icon={[isUpVoted ? 'fas' : 'far', 'thumbs-up']} 
            onClick={() => upVoteHandler(threadId, comment.id)}
            style={{cursor: 'pointer'}}
            color={isUpVoted ? 'red' : 'black'}
          />
          <span>{comment.upVotesBy.length}</span>
          <FontAwesomeIcon 
            icon={[isDownVoted ? 'fas' : 'far', 'thumbs-down']} 
            onClick={() => downVoteHandler(threadId, comment.id)}
            style={{cursor: 'pointer'}}
            color={isDownVoted ? 'red' : 'black'}
          />
          <span>{comment.downVotesBy.length}</span>
        </div>
      </div>
    </div>
  )
}