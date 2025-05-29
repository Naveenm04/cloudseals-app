import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = ({ onRegisterClick }) => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">CloudSeals</span>
      </div>
      <nav className="nav-links">
        <Link to="/docs">Docs</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="header-actions">
        <button onClick={onRegisterClick} className="get-started-button">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;