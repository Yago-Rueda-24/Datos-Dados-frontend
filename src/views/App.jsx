import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Signup from './Signup.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;