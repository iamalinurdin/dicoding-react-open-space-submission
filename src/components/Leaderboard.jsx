import React from 'react';
import PropTypes from 'prop-types';

function Leaderboard({ user, score }) {
  return (
    <article className="border-bottom mb-3 pb-2 d-flex align-items-center">
      <img src={user.avatar} className="rounded-circle me-3" width={40} alt="" />
      <section className="description">
        <p className="mb-0 fw-semibold">{user.name}</p>
        <p className="mb-0">Score: {score}</p>
      </section>
    </article>
  )
}

Leaderboard.propTypes = {
  user: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
}

export default Leaderboard;
