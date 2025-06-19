// File: src/components/DashboardOverview/DashboardOverview.jsx
import React from 'react';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <div className="dashboard-container">
      {/* Top Navigation */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      {/* KPI Cards */}
      <section className="kpi-cards">
        <div className="card">
          <h3>Cloud Spend</h3>
          <p>$12,540</p>
        </div>
        <div className="card">
          <h3>Compliance</h3>
          <p>92%</p>
        </div>
        <div className="card">
          <h3>Incidents</h3>
          <p>5</p>
        </div>
      </section>

      {/* Charts & Graphs */}
      <section className="visualization">
        <div className="chart-box">
          <h3>Cost Over Time</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>
        <div className="chart-box">
          <h3>Compliance Trends</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>
      </section>

      {/* Recent Activity Feed */}
      <section className="activity-feed">
        <h3>Recent Activity</h3>
        <ul>
          <li>New VM deployed in US-East.</li>
          <li>Cost optimization applied on storage.</li>
          <li>User John updated compliance policy.</li>
        </ul>
      </section>

      {/* Quick Action Buttons */}
      <section className="quick-actions">
        <button>+ Add Resource</button>
        <button>Generate Report</button>
        <button>Run Audit</button>
      </section>
    </div>
  );
};

export default DashboardOverview;