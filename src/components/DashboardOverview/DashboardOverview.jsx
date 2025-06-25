// File: src/components/DashboardOverview/DashboardOverview.jsx
import React from 'react';
import './DashboardOverview.css';
import KPIWidgets from './KPIWidgets';
import QuickActions from './QuickActions';
import TopNavBar from './TopNavBar';
import Sidebar from './Sidebar';
import ChartSection from './ChartSection';
import ActivityFeed from './ActivityFeed';

const DashboardOverview = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="dashboard-main">
        <TopNavBar />

        <div className="dashboard-content">
          <KPIWidgets />
          <ChartSection />
          <ActivityFeed />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
