import React from 'react';
import NavBar from './NavBar'
import './HeroHeader.css'
import { Link } from 'react-router-dom';

function HeroHeader() {
  return (
    <nav className="navbar">
      <Link to="/posts">
        <span>
        <img width="125" src="https://iili.io/HXehR5l.png" alt="Logo" />
        </span>
      </Link>

      <div>
        <NavBar />
      </div>
    </nav>
  );
}

export default HeroHeader;