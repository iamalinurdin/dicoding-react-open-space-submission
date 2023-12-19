import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const auth = useSelector((state) => state.auth)

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">Dicoding Forum</div>
        <div class="dropdown-center">
          <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={auth.avatar} height={40} className='rounded-circle' alt="" />
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
