import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/mainhome')}>
        CloudSeals
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/mainhome">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>

        <div className="dropdown">
          <button className="dropbtn">Solutions ▾</button>
          <div className="dropdown-content">
            <Link to="/solutions/esg">ESG</Link>
            <Link to="/solutions/healthcare">Healthcare</Link>
            <Link to="/solutions/bfsi">BFSI</Link>
          </div>
        </div>

        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>

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
