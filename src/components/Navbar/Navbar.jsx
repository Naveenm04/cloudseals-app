import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/mainhome')}>
        <strong>CloudSeals</strong>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/mainhome" activeclassname="active">Home</NavLink>
        <NavLink to="/features" activeclassname="active">Features</NavLink>
        <NavLink to="/pricing" activeclassname="active">Pricing</NavLink>

        <div
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="dropbtn">Solutions ▾</button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <NavLink to="/solutions/cloudseals-fin-optimize">Cloudseals FinOptimize</NavLink>
            <NavLink to="/solutions/cloudseals-secure-guard">CloudSeals SecureGuard</NavLink>
            <NavLink to="/solutions/cloudseals-dev-predict">CloudSeals DevPredict</NavLink>
            <NavLink to="/solutions/guardianeye-by-cloudseals">GuardianEye by CloudSeals</NavLink>
          </div>
        </div>

        <NavLink to="/resources" activeclassname="active">Resources</NavLink>
        <NavLink to="/contact" activeclassname="active">Contact</NavLink>

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
