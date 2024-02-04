// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import trackbox from './trackbox.png'; // Replace with the path to your logo image file


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <div className="logo-container">
        <img src={trackbox} alt="Logo" className="trackbox" />
      </div>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Track</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
