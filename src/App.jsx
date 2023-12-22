import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout';
import Home from './pages/Home';
import DetailThread from './pages/DetailThread';
import Login from './pages/Login';
import Register from './pages/Register';
import { asyncPreloadProcess } from './redux/preload/action';
import Leaderboards from './pages/Leaderboards';

function App() {
  const { auth, preload } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (preload) {
    return null;
  }

  if (auth == null) {
    return (
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/thread/:id" element={<DetailThread />} />
        <Route path="/leaderboard" element={<Leaderboards />} />
      </Route>
    </Routes>
  );
}

export default App;
