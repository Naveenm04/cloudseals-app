import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/DashboardHeader.css';
import {
  FaBars, FaBell, FaSearch, FaUserCircle, FaSignOutAlt
} from 'react-icons/fa';
import '../styles/theme.css';
import '../styles/Home.css';
import DashboardFooter from '../components/DashboardFooter/DashboardFooter';

const MainDashboard = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="home-wrapper font-sans text-sm">
      {/* Header */}
      <header className="header bg-[#1f2937] text-white shadow-md">
        {/* Left Side */}
        <div className="header-left">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="menu-btn"
            aria-label="Toggle Sidebar"
          >
            <FaBars className="text-lg" />
          </button>
          <div
            className="logo-container cursor-pointer"
            onClick={() => navigate('/dashboard-overview')}
          >
            <span className="logo-text">CloudSeals</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="header-right">
          <FaBell className="text-xl cursor-pointer" title="Notifications" />

          {/* Search Input */}
          <div className="search-container relative">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          {/* User Dropdown */}
          <div className="user-dropdown relative">
            <FaUserCircle
              className="text-2xl cursor-pointer"
              onClick={() => setUserDropdownOpen(prev => !prev)}
            />
            {userDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">👤 Profile & Settings</div>
                <div className="dropdown-item">🏢 Org Switcher</div>
                <div className="dropdown-item">📘 Help & Docs</div>
                <div
                  className="dropdown-item logout"
                  onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                  }}
                >
                  <FaSignOutAlt /> Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar + Main Content */}
      <div className="home-page-layout flex">
        {sidebarOpen && <Sidebar isOpen={sidebarOpen} />}
        <div className="home-container flex-1 p-4">
          <Outlet />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default MainDashboard;
