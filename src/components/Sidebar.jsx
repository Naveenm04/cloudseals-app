// src/components/Sidebar.jsx
import React from 'react';
import {
  FiHome, FiStar, FiDatabase, FiLayers, FiUsers,
  FiMap, FiBarChart2, FiPieChart, FiCheckCircle, FiSettings,
  FiFileText, FiTrendingUp, FiClock, FiPower, FiHash, FiActivity,
  FiCalendar, FiRefreshCw
} from 'react-icons/fi';

import './Sidebar.css';

const Sidebar = ({ onMenuSelect, selectedMenu }) => {
  const topMenuItems = [
    { label: 'Home', key: 'home', icon: <FiHome /> },
    { label: 'Recommendations', key: 'recommendations', icon: <FiStar /> },
    { label: 'Resources', key: 'resources', icon: <FiDatabase /> },
    { label: 'Pools', key: 'pools', icon: <FiLayers /> },
    { label: 'Shared Environments', key: 'shared-environments', icon: <FiUsers /> },
  ];

  const finopsItems = [
    { label: 'Cost Explorer', key: 'cost-explorer', icon: <FiBarChart2 /> },
    { label: 'Cost Map', key: 'cost-map', icon: <FiMap /> },
    { label: 'FinOps Portal', key: 'finops-portal', icon: <FiPieChart /> },
  ];

  const mlopsItems = [
    { label: 'Tasks', key: 'tasks', icon: <FiCheckCircle /> },
    { label: 'Models', key: 'models', icon: <FiActivity /> },
    { label: 'Datasets', key: 'datasets', icon: <FiDatabase /> },
    { label: 'Artifacts', key: 'artifacts', icon: <FiFileText /> },
    { label: 'Hypertuning', key: 'hypertuning', icon: <FiTrendingUp /> },
    { label: 'Metrics', key: 'metrics', icon: <FiBarChart2 /> },
  ];

  const policyItems = [
    { label: 'Anomaly Detection', key: 'anomaly-detection', icon: <FiPieChart /> },
    { label: 'Quotas and Budgets', key: 'quotas-budgets', icon: <FiSettings /> },
    { label: 'Tagging', key: 'tagging', icon: <FiHash /> },
    { label: 'Resource Lifecycle', key: 'resource-lifecycle', icon: <FiClock /> },
    { label: 'Power Schedules', key: 'power-schedules', icon: <FiPower /> },
  ];

  const sandboxItems = [
  { label: 'K8s Rightsizing', key: 'k8s-rightsizing', icon: <FiActivity /> },
  { label: 'Archive', key: 'archive', icon: <FiClock /> },
  { label: 'Cost Comparison', key: 'cost-comparison', icon: <FiTrendingUp /> }
];

const systemItems = [
  { label: 'User Management', key: 'user-management', icon: <FiUsers /> },
  { label: 'Data Sources', key: 'data-sources', icon: <FiDatabase /> },
  { label: 'Integrations', key: 'integrations', icon: <FiRefreshCw /> },
  { label: 'Events', key: 'events', icon: <FiCalendar /> },
  { label: 'Settings', key: 'settings', icon: <FiSettings /> }
];


  return (
    <div className="sidebar">
      {/* Top menu items */}
      <div className="sidebar-section">
        {topMenuItems.map(item => (
          <button
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? 'active' : ''}`}
            onClick={() => onMenuSelect(item.key)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* FINOPS section */}
      <div className="sidebar-section">
        <div className="menu-heading">FINOPS</div>
        {finopsItems.map(item => (
          <button
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? 'active' : ''}`}
            onClick={() => onMenuSelect(item.key)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* MLOPS section */}
      <div className="sidebar-section">
        <div className="menu-heading">MLOPS</div>
        {mlopsItems.map(item => (
          <button
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? 'active' : ''}`}
            onClick={() => onMenuSelect(item.key)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* POLICIES section */}
      <div className="sidebar-section">
        <div className="menu-heading">POLICIES</div>
        {policyItems.map(item => (
          <button
            key={item.key}
            className={`menu-item ${selectedMenu === item.key ? 'active' : ''}`}
            onClick={() => onMenuSelect(item.key)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Empty headers for future use */}
      {/* SANDBOX section */}
<div className="sidebar-section">
  <div className="menu-heading">SANDBOX</div>
  {sandboxItems.map(item => (
    <button
      key={item.key}
      className={`menu-item ${selectedMenu === item.key ? 'active' : ''}`}
      onClick={() => onMenuSelect(item.key)}
    >
      <span className="icon">{item.icon}</span>
      <span>{item.label}</span>
    </button>
  ))}
</div>

{/* SYSTEM section */}
<div className="sidebar-section">
  <div className="menu-heading">SYSTEM</div>
  {systemItems.map(item => (
    <button
      key={item.key}
      className={`menu-item ${selectedMenu === item.key ? 'active' : ''}`}
      onClick={() => onMenuSelect(item.key)}
    >
      <span className="icon">{item.icon}</span>
      <span>{item.label}</span>
    </button>
  ))}
</div>

     
    </div>
  );
};

export default Sidebar;
