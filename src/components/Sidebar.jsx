// src/components/Sidebar.jsx
import React from 'react';
import {
  FiHome, FiStar, FiDatabase, FiLayers, FiUsers,
  FiMap, FiBarChart2, FiPieChart, FiCheckCircle, FiSettings,
  FiFileText, FiTrendingUp, FiClock, FiPower, FiHash, FiActivity,
  FiCalendar, FiRefreshCw
} from 'react-icons/fi';

import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (key) => {
    navigate(`/${key}`);
  };

  const getActiveClass = (key) => {
    return location.pathname.includes(key) ? 'active' : '';
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
      {renderSection(null, [
        { label: 'Home', key: 'home', icon: <FiHome /> },
        { label: 'Recommendations', key: 'recommendations', icon: <FiStar /> },
        { label: 'Resources', key: 'resources', icon: <FiDatabase /> },
        { label: 'Pools', key: 'pools', icon: <FiLayers /> },
        { label: 'Shared Environments', key: 'shared-environments', icon: <FiUsers /> }
      ])}

      {renderSection('FINOPS', [
        { label: 'Cost Explorer', key: 'cost-explorer', icon: <FiBarChart2 /> },
        { label: 'Cost Map', key: 'cost-map', icon: <FiMap /> },
        { label: 'FinOps Portal', key: 'finops-portal', icon: <FiPieChart /> }
      ])}

      {renderSection('MLOPS', [
        { label: 'Tasks', key: 'tasks', icon: <FiCheckCircle /> },
        { label: 'Models', key: 'models', icon: <FiActivity /> },
        { label: 'Datasets', key: 'datasets', icon: <FiDatabase /> },
        { label: 'Artifacts', key: 'artifacts', icon: <FiFileText /> },
        { label: 'Hypertuning', key: 'hypertuning', icon: <FiTrendingUp /> },
        { label: 'Metrics', key: 'metrics', icon: <FiBarChart2 /> }
      ])}

      {renderSection('POLICIES', [
        { label: 'Anomaly Detection', key: 'anomaly-detection', icon: <FiPieChart /> },
        { label: 'Quotas and Budgets', key: 'Quotas-and-budgetssets', icon: <FiSettings /> },
        { label: 'Tagging', key: 'tagging', icon: <FiHash /> },
        { label: 'Resource Lifecycle', key: 'resource-lifecycle', icon: <FiClock /> },
        { label: 'Power Schedules', key: 'power-schedules', icon: <FiPower /> }
      ])}

      {renderSection('SANDBOX', [
        { label: 'K8s Rightsizing', key: 'k8s-rightsizing', icon: <FiActivity /> },
        { label: 'Archive', key: 'archive', icon: <FiClock /> },
        { label: 'Cost Comparison', key: 'cost-comparison', icon: <FiTrendingUp /> }
      ])}

      {renderSection('SYSTEM', [
        { label: 'User Management', key: 'user-management', icon: <FiUsers /> },
        { label: 'Data Sources', key: 'data-sources', icon: <FiDatabase /> },
        { label: 'Integrations', key: 'integrations', icon: <FiRefreshCw /> },
        { label: 'Events', key: 'events', icon: <FiCalendar /> },
        { label: 'Settings', key: 'settings', icon: <FiSettings /> }
      ])}
    </div>
  );
};

export default Sidebar;
