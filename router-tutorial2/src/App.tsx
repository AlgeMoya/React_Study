import React, {useState} from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import About from './About'
import Home from './Home'
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};



export default App
