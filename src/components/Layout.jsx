import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center">
        <div className="w-50 py-3 px-2 min-h-100 bg-light">
          <Outlet />
        </div>
      </div>
    </>
  );
}
