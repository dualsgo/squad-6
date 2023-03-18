import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import LoginPage from './components/pages/login';
import ReqApi from './components/Login/API/ReqApi';
import PostApi from './components/Login/API/PostApi'

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<ReqApi />} />
        <Route path='/post' element={<PostApi />} />
      </Routes>
    </Router>
  );
}

export default App;