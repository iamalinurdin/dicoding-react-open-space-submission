import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import fullDatetime from '../utils/datetime';

function Thread({
  children, thread, upVoteHandler, downVoteHandler,
}) {
  const { auth, users } = useSelector((state) => state);
  const isUpVoted = thread?.upVotesBy?.includes(auth.id);
  const isDownVoted = thread?.downVotesBy?.includes(auth.id);
  const owner = Object.prototype.hasOwnProperty.call(thread, 'ownerId')
    ? users.filter((user) => user.id === thread?.ownerId)[0]
    : thread?.owner;

  return (
    <div className="card border-0 bg-transparent">
      <div className="card-body">
        <div className="d-flex align-items-center gap-2 mb-3">
          <img src={owner?.avatar} height={40} className="rounded-circle" alt="" />
          <span className="fw-bold">{owner?.name}</span>
        </div>
        <div className="d-block mb-3">
          <p className="border w-auto d-inline px-2 py-1 rounded-3 small">{`#${thread?.category}`}</p>
        </div>
        <Link to={`/thread/${thread?.id}`} className="fw-semibold text-decoration-none fs-5">{thread?.title}</Link>
        <p className="mb-0">{parse(thread?.body ?? '')}</p>
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
          <span className="small text-muted">{fullDatetime(thread?.createdAt)}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

Thread.propTypes = {
  children: PropTypes.element.isRequired,
  thread: PropTypes.shape.isRequired,
  upVoteHandler: PropTypes.func.isRequired,
  downVoteHandler: PropTypes.func.isRequired,
};

export default Thread;
