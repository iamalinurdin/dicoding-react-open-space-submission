import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DetailThread from './pages/DetailThread';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import { asyncPreloadProcess } from './redux/preload/action';

function App() {
  const auth = useSelector((state) => state.auth)
  const preload = useSelector((state) => state.preload)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  if (preload) {
    return null
  }

  if (auth == null) {
    return (
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/thread/:id" element={<DetailThread />} />
      </Route>
    </Routes>
  );
}

export default App;
