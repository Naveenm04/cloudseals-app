import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        CloudSeals
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a onClick={() => navigate('/')}>Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>

        <div className="dropdown">
          <button className="dropbtn">Solutions ▾</button>
          <div className="dropdown-content">
            <a href="#esg">ESG</a>
            <a href="#healthcare">Healthcare</a>
            <a href="#bfsi">BFSI</a>
          </div>
        </div>

        <a href="#resources">Resources</a>
        <a href="#contact">Contact</a>

        <button className="btn register" onClick={() => navigate('/signup')}>Register</button>
        <button className="btn login" onClick={() => navigate('/signin')}>Login</button>
      </div>

      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
