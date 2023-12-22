import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddRetrieveLeaderboardsActionCreator } from '../redux/leaderboards/action';
import Leaderboard from '../components/Leaderboard';

export default function Leaderboards() {
  const dispatch = useDispatch();
  const {
    leaderboards = [],
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncAddRetrieveLeaderboardsActionCreator());
  }, [dispatch]);

  return (
    <>
      <p className="fw-bold text-center fs-5">Current Leaderboards</p>
      {leaderboards && leaderboards.map((leaderboard) => (
        <div key={leaderboard.user.id}>
          <Leaderboard user={leaderboard.user} score={leaderboard.score} />
        </div>
      ))}
    </>
  );
}
