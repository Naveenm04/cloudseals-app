import React from 'react';
import './DashboardOverview.css';
import { useNavigate } from 'react-router-dom';
import {
  FaDollarSign, FaShieldAlt, FaHeart, FaExclamationTriangle,
  FaClipboardList, FaChartPie, FaChartLine, FaUserCheck, FaUserPlus
} from 'react-icons/fa';
import DashboardFooter from '../components/DashboardFooter/DashboardFooter'; // ✅ Already imported

const DashboardOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* KPI Section */}
      <section className="dashboard-section">
        <h2>KPI Widgets</h2>
        <div className="kpi-grid">
          <div className="kpi-card clickable" onClick={() => navigate('/cost-optimization')}>
            <FaDollarSign className="icon" />
            <div>
              <h4>Cloud Spend</h4>
              <p>$25,000</p>
            </div>
          </div>
          <div className="kpi-card clickable" onClick={() => navigate('/cost-optimization')}>
            <FaDollarSign className="icon" />
            <div>
              <h4>Cost Savings</h4>
              <p>$7,500</p>
            </div>
          </div>
          <div className="kpi-card clickable" onClick={() => navigate('/compliance-security')}>
            <FaShieldAlt className="icon" />
            <div>
              <h4>Compliance Status</h4>
              <p>92%</p>
            </div>
          </div>
          <div className="kpi-card clickable" onClick={() => navigate('/agentops')}>
            <FaHeart className="icon" />
            <div>
              <h4>Agent Health</h4>
              <p>Good</p>
            </div>
          </div>
          <div className="kpi-card clickable" onClick={() => navigate('/audit-logs')}>
            <FaExclamationTriangle className="icon" />
            <div>
              <h4>Open Incidents</h4>
              <p>3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="dashboard-section">
        <h2>Recent Activity Feed</h2>
        <ul className="activity-feed">
          <li><FaClipboardList /> Agent deployed on server X</li>
          <li><FaUserCheck /> User John approved resource change</li>
          <li><FaExclamationTriangle /> Alert triggered: High CPU Usage</li>
        </ul>
      </section>

      {/* Visualization Section */}
      <section className="dashboard-section">
        <h2>Visualization Section</h2>
        <div className="viz-grid">
          <div className="viz-card clickable" onClick={() => navigate('/cloud-resources-storage')}>
            <FaChartPie className="icon" />
            <p>Resource Usage Pie Chart</p>
          </div>
          <div className="viz-card clickable" onClick={() => navigate('/cost-optimization')}>
            <FaChartLine className="icon" />
            <p>Cost Trend Line</p>
          </div>
          <div className="viz-card clickable" onClick={() => navigate('/compliance-security')}>
            <FaShieldAlt className="icon" />
            <p>Compliance Heatmap</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="dashboard-section">
        <h2>Quick Actions</h2>
        <div className="quick-actions">
          <button onClick={() => alert('Deploy Agent triggered')}>
            <FaUserPlus /> Deploy Agent
          </button>
          <button onClick={() => alert('Add Resource triggered')}>
            <FaUserPlus /> Add Resource
          </button>
          <button onClick={() => alert('Approve Action triggered')}>
            <FaUserCheck /> Approve Action
          </button>
        </div>
      </section>

      {/* ✅ Dashboard Footer */}
      {/* <DashboardFooter /> */}
    </div>
  );
};

export default DashboardOverview;
