import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="row d-flex justify-content-center w-100 mt-3">
        <div className="col-3">
          <div className="card rounded-0 border-0">
            <div className="card-body">
              asdasdasd
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
