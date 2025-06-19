import React, { useState } from 'react';
import {
  FiHome, FiDatabase, FiLayers, FiUsers,
  FiBarChart2, FiPieChart, FiCheckCircle, FiSettings,
  FiFileText, FiTrendingUp, FiActivity, FiCalendar, FiPower,
  FiChevronDown, FiChevronRight
} from 'react-icons/fi';

import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';
import DarkLightModeToggle from '../pages/DarkLightModeToggle';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [cloudExpanded, setCloudExpanded] = useState(true);
  const [adminExpanded, setAdminExpanded] = useState(true);
  const [stickyExpanded, setStickyExpanded] = useState(true);

  const handleNavigation = (key) => {
    navigate(`/${key}`);
  };

  const getActiveClass = (key) => {
    return location.pathname === `/${key}` ? 'active' : '';
  };

  const renderSection = (title, items) => (
    <div className="sidebar-section">
      {title && <div className="menu-heading">{title}</div>}
      {items.map(item => (
        <button
          key={item.key}
          className={`menu-item ${getActiveClass(item.key)}`}
          onClick={() => handleNavigation(item.key)}
        >
          <span className="icon">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="sidebar">
      {/* MAIN SECTION */}
      <div className="sidebar-section">
        <div className="menu-heading">MAIN</div>

        <button
          className={`menu-item ${getActiveClass('dashboard-overview')}`}
          onClick={() => handleNavigation('dashboard-overview')}
        >
          <span className="icon"><FiHome /></span>
          <span>Dashboard Overview</span>
        </button>

        {/* Collapsible Cloud Resources */}
        <div className="menu-item collapsible" onClick={() => setCloudExpanded(!cloudExpanded)}>
          <span className="icon"><FiDatabase /></span>
          <span>Cloud Resources</span>
          <span className="icon right">{cloudExpanded ? <FiChevronDown /> : <FiChevronRight />}</span>
        </div>
        {cloudExpanded && (
          <div className="submenu">
            {['Compute', 'Storage', 'Databases', 'Network'].map(label => {
              const key = `cloud-resources-${label.toLowerCase()}`;
              return (
                <button
                  key={key}
                  className={`menu-item submenu-item ${getActiveClass(key)}`}
                  onClick={() => handleNavigation(key)}
                >
                  <span className="icon"><FiDatabase size={14} /></span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Other Main Menu Items */}
        {renderSection('', [
          { label: 'AI Agents', key: 'ai-agents', icon: <FiUsers /> },
          { label: 'Workflows / Automations', key: 'workflows-automations', icon: <FiLayers /> },
          { label: 'Cost Optimization', key: 'cost-optimization', icon: <FiTrendingUp /> },
          { label: 'Compliance & Security', key: 'compliance-security', icon: <FiCheckCircle /> },
          { label: 'Bias / Fairness Analytics', key: 'bias-fairness-analytics', icon: <FiBarChart2 /> },
          { label: 'AgentOps (Monitoring & Health)', key: 'agentops', icon: <FiActivity /> },
          { label: 'Audit Logs', key: 'audit-logs', icon: <FiFileText /> },
          { label: 'Settings', key: 'settings', icon: <FiSettings /> }
        ])}
      </div>

      {/* ADMIN SECTION with Collapsible Submenu */}
      <div className="sidebar-section">
        <div
          className="menu-heading collapsible"
          onClick={() => setAdminExpanded(!adminExpanded)}
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <span>Admin <span style={{ fontWeight: 'bold' }}>(if admin role)</span></span>
          {adminExpanded ? <FiChevronDown /> : <FiChevronRight />}
        </div>
        {adminExpanded && (
          <div className="submenu">
            {[
              { label: 'User Management', key: 'user-management', icon: <FiUsers /> },
              { label: 'Org Settings', key: 'org-settings', icon: <FiSettings /> },
              { label: 'Billing', key: 'billing', icon: <FiPieChart /> }
            ].map(item => (
              <button
                key={item.key}
                className={`menu-item submenu-item ${getActiveClass(item.key)}`}
                onClick={() => handleNavigation(item.key)}
              >
                <span className="icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* STICKY FOOTER SECTION with Collapsible Submenu */}
      <div className="sidebar-section">
        <div
          className="menu-heading collapsible"
          onClick={() => setStickyExpanded(!stickyExpanded)}
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <span>Sticky Footer</span>
          {stickyExpanded ? <FiChevronDown /> : <FiChevronRight />}
        </div>
        {stickyExpanded && (
          <div className="submenu">
            <button
              className={`menu-item submenu-item ${getActiveClass('feedback-support')}`}
              onClick={() => handleNavigation('feedback-support')}
            >
              <span className="icon"><FiCalendar /></span>
              <span>Feedback / Support</span>
            </button>

            <div className="menu-item submenu-item no-border">
              <span className="icon"><FiPower /></span>
              <DarkLightModeToggle />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
