import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Signup from './Signup.jsx';
import Wiki from './Wiki.jsx';
import Wikicategory from './Wikicategory.jsx';
import SpellPage from './Wiki/SpellPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/wiki/spells" element={<Wikicategory />} />
        <Route path="/wiki/spell/:id" element={<SpellPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;