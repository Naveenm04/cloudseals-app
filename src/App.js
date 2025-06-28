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
import ComplianceSecurity from './components/ComplianceSecurity/ComplianceSecurity';
import BiasFairnessAnalytics from './components/BiasFairnessAnalytics/BiasFairnessAnalytics';
import AgentOpsMonitoringHealth from './components/AgentOpsMonitoringHealth/AgentOpsMonitoringHealth';
import AuditLogs from './components/AuditLogs/AuditLogs';
import Settings from './components/Settings/Settings';
import UserManagement from './components/Admin/UserManagement';
import OrgSettings from './components/Admin/OrgSettings';
import Billing from './components/Admin/Billing';
import FeedbackSupport from './pages/FeedbackSupport';
import DarkLightModeToggle from './pages/DarkLightModeToggle';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import CloudSealsSecureGuard from './pages/solutions/CloudSealsSecureGuard';
import CloudSealsDevPredict from './pages/solutions/CloudSealsDevPredict';
import CloudsealsFinOptimize from './pages/solutions/CloudsealsFinOptimize';
import GuardianEyebyCloudSeals from './pages/solutions/GuardianEyebyCloudSeals';


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

          {/* mainhome menus */}
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions/cloudseals-dev-predict" element={<CloudSealsDevPredict />} />
          <Route path="/solutions/cloudseals-fin-optimize" element={<CloudsealsFinOptimize />} />
          <Route path="/solutions/cloudseals-secure-guard" element={<CloudSealsSecureGuard />} />
          <Route path="/solutions/guardianeye-by-cloudseals" element={<GuardianEyebyCloudSeals />} />
          <Route path="/resources" element={<Resources />} />


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
