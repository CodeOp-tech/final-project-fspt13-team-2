import React from 'react';
import NavBar from './NavBar'
import './HeroHeader.css'
import { Link } from 'react-router-dom';

function HeroHeader() {
  return (
    <nav className="navbar">
      <Link to="/">
        <span>
        <img width="250" src="https://iili.io/HXehR5l.png" alt="Logo" />
        </span>
      </Link>

      <div>
        <NavBar />
      </div>
    </nav>
  );
}

export default HeroHeader;