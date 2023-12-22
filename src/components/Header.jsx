import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const auth = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">Dicoding Forum</div>
        <img src={auth?.avatar} height={40} className="rounded-circle" alt="" />
      </div>
    </nav>
  );
}
