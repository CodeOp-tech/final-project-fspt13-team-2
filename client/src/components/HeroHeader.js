import React from 'react';
import logo from './WowOrMeh.jpeg';
import './HeroHeader.css'

function HeroHeader() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>WowOrMeh</span>
      </div>
      <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
      <label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default HeroHeader;