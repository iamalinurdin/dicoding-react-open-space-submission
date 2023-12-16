import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DetailThread from './pages/DetailThread';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/thread/:id" element={<DetailThread />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
