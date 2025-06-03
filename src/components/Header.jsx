import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">CloudSeals</span>
      </div>
      <nav className="nav-links">
        <Link to="/docs">Solutions</Link>
        <Link to="/pricing">Services</Link>
        <Link to="/about">Company</Link>
        <Link to="/about">Case Studies</Link>
      </nav>
      <div className="header-actions">
        <Link to="/signin">
          <button className="get-started-button">Get Started</button>
        </Link>
        <Link to="/signup">
          <button className="get-started-button">Register</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
