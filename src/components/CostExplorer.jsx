// src/components/Dashboard.jsx
import React from 'react';
import ModelTable from './ModelTable';
import TaskTable from './TaskTable';
// import OrganizationExpenses from './OrganizationExpenses';
import OrganizationExpenses from './OrganizationExpenses';
import TopResourceExpenses from './TopResourceExpenses';
import '../styles/Dashboard.css';
import RecommendationsWidget from './RecommendationsWidget';
import ResourceTable from './ResourceTable';
import ExceededLimitTable from './ExceededLimitTable';
import ExpenseDashboard from './ExpenseDashboard/ExpenseDashboard';

import './DashboardWidget.css';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Row 1: Models and Tasks */}
        <div className="dashboard-container">
        <div className="dashboard-columns">
         <ExpenseDashboard/>
        </div>
      </div>

      {/* Row 2: Organization and Resource Expenses */}
    </div>
  );
};

export default Dashboard;
