import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import './SidebarFooter.css';
import DarkLightModeToggle from '../common/DarkLightModeToggle';

const SidebarFooter = () => {
  return (
    <div className="sidebar-footer">
      <h4 className="footer-title">STICKY FOOTER</h4>

      <div className="footer-item">
        <span className="footer-icon">📅</span>
        <span>Feedback / Support</span>
      </div>

      <div className="footer-item">
        <span className="footer-icon">
          <FaPowerOff />
        </span>
        <DarkLightModeToggle />
      </div>
    </div>
  );
};

export default SidebarFooter;
