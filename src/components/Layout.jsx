import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { asyncUnsetAuthUserActionCreator } from '../redux/auth/action';

export default function Layout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(asyncUnsetAuthUserActionCreator());
  };

  return (
    <>
      <Header />
      <div className="row d-flex justify-content-center w-100 mt-3">
        <div className="col-3">
          <div className="card rounded-0 border-0">
            <div className="card-body d-flex flex-column gap-2">
              <NavLink to="/" className="btn btn-primary w-100">Threads</NavLink>
              <NavLink to="/leaderboard" className="btn btn-primary w-100">Leaderboards</NavLink>
              <hr />
              <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}
