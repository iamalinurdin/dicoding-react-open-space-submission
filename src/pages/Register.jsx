import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { asyncRegisterActionCreator } from '../redux/auth/action';

export default function Register() {
  const [name, onChangeName] = useInput();
  const [password, onChangePassword] = useInput();
  const [email, onChangeEmail] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncRegisterActionCreator({ name, password, email }));
    navigate('/login');
  };

  return (
    <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: 350 }}>
        <div className="card-body">
          <p className="fw-semibold text-center">Login Thread App</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username">
                Name
                <input onChange={onChangeName} type="text" id="username" className="form-control" />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                E-mail
                <input onChange={onChangeEmail} type="text" id="email" className="form-control" />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                Password
                <input onChange={onChangePassword} type="password" id="password" className="form-control" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
