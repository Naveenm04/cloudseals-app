// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';

import SignUpForm from './components/Auth/SignUpForm';
import SignInForm from './components/Auth/SignInForm';

import MainHome from './pages/MainHome';
import MainDashboard from './pages/MainDashboard';
import Dashboard from './components/Dashboard';
import DashboardOverview from './pages/DashboardOverview';

import CloudResourcesNetwork from './components/CloudResourcesNetwork';
import CloudResourcesCompute from './components/CloudResourcesCompute';
import CloudResourcesStorage from './components/CloudResourcesStorage';
import CloudResourcesDatabases from './components/CloudResourcesDatabases';

import Storage from './components/Storage';
import Network from './components/Network';

import AiAgents from './components/AiAgents';
import WorkflowsAutomations from './components/WorkflowsAutomations';
import CostOptimization from './components/CostOptimization';
import ComplianceSecurity from './components/ComplianceSecurity';

import AgentOpsMonitoringHealth from './components/AgentOpsMonitoringHealth';
import BiasFairnessAnalytics from './pages/BiasFairnessAnalytics';
// import AgentOpsOrMonitoringHealth from './pages/AgentOpsOrMonitoringHealth';

import AuditLogs from './pages/AuditLogs';
import Settings from './pages/Settings';
import UserManagement from './pages/UserManagement'; // ✅ Only ONE import here
import OrgSettings from './pages/OrgSettings';
import Billing from './pages/Billing';
import FeedbackSupport from './pages/FeedbackSupport';
import DarkLightModeToggle from './pages/DarkLightModeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/mainhome" replace />} />

          {/* Public Routes */}
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/mainhome" element={<MainHome />} />

          {/* Protected Routes under Dashboard Layout */}
          <Route path="/" element={<MainDashboard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard-overview" element={<DashboardOverview />} />
            <Route path="cloud-resources-network" element={<CloudResourcesNetwork />} />
            <Route path="cloud-resources-compute" element={<CloudResourcesCompute />} />
            <Route path="cloud-resources-storage" element={<CloudResourcesStorage />} />
            <Route path="cloud-resources-databases" element={<CloudResourcesDatabases />} />
            <Route path="storage" element={<Storage />} />
            <Route path="network" element={<Network />} />
            <Route path="ai-agents" element={<AiAgents />} />
            <Route path="workflows-automations" element={<WorkflowsAutomations />} />
            <Route path="cost-optimization" element={<CostOptimization />} />
            <Route path="compliance-security" element={<ComplianceSecurity />} />
            <Route path="agentops" element={<AgentOpsMonitoringHealth />} />
            <Route path="bias-fairness-analytics" element={<BiasFairnessAnalytics />} />
            <Route path="audit-logs" element={<AuditLogs />} />
            <Route path="settings" element={<Settings />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="org-settings" element={<OrgSettings />} />
            <Route path="billing" element={<Billing />} />
            <Route path="feedback-support" element={<FeedbackSupport />} />
            <Route path="dark-light-toggle" element={<DarkLightModeToggle />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
