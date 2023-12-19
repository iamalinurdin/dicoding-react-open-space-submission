import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDownVoteThreadActionCreator, asyncUpVoteThreadActionCreator } from '../redux/thread/action';

function Thread({ children, thread }) {
  const { auth } = useSelector((state) => state)
  const dispatch = useDispatch()
  const isUpVoted = thread.upVotesBy.includes(auth.id)
  const isDownVoted = thread.downVotesBy.includes(auth.id)

  const upVoteHandler = (id) => {
    dispatch(asyncUpVoteThreadActionCreator(id))
  }

  const downVoteHandler = (id) => {
    dispatch(asyncDownVoteThreadActionCreator(id))
  }

  return (
    <div className="card border-0 bg-transparent">
      <div className="card-body">
        <div className="d-block mb-3">
          <p className='border w-auto d-inline px-2 py-1 rounded-3 border-black small'>#{thread?.category}</p>
        </div>
        <Link to={`/thread/${thread?.id}`} className='fw-semibold text-decoration-none fs-5'>{thread?.title}</Link>
        <p className="mb-0">{thread?.body}</p>
        <div className="d-flex align-items-center gap-2">
          <FontAwesomeIcon 
            icon={[isUpVoted ? 'fas' : 'far', 'thumbs-up']} 
            onClick={() => upVoteHandler(thread?.id)} 
            style={{ cursor: 'pointer' }} 
            color={isUpVoted ? 'red' : 'black'}
          />
          <span>{thread?.upVotesBy?.length ?? 0}</span>
          <FontAwesomeIcon 
            icon={[isDownVoted ? 'fas' : 'far', 'thumbs-down']} 
            onClick={() => downVoteHandler(thread?.id)} 
            style={{ cursor: 'pointer' }}
            color={isDownVoted ? 'red' : 'black'}
          />
          <span>{thread?.downVotesBy?.length ?? 0}</span>
          <FontAwesomeIcon icon={['far', 'comments']} />
          <span>{thread?.totalComments}</span>
          <span>{thread?.createdAt}</span>
          <span>Dibuat oleh <span className="fw-semibold">asdasd</span></span>
        </div>
        {children}
      </div>
    </div>
  );
}

Thread.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default Thread;
