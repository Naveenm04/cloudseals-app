import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import MainDashboard from './pages/MainDashboard';
import SignUpForm from './components/Auth/SignUpForm';
import SignInForm from './components/Auth/SignInForm';
import Dashboard from './components/Dashboard';
import Recommendations from './components/Recommendations';
import Resources from './components/Resources';
import Pools from './components/Pools';
import SharedEnvironments from './components/SharedEnvironments';
import CostExplorer from './components/CostExplorer';
import CostMap from './components/CostMap';
import FinOpsPortal from './components/FinOpsPortal';
import Models from './pages/Models';
import Datasets from './pages/Datasets';
import Artifacts from './pages/Artifacts';
import Hypertuning from './pages/Hypertuning';
import Metrics from './pages/Metrics';
import AnomalyDetection from './pages/AnomalyDetection';
import QuotasAndBudgetssets from './pages/QuotasAndBudgetssets';
import Tagging from './pages/Tagging';
import ResourceLifecycle from './pages/ResourceLifecycle';
import PowerSchedules from './pages/PowerSchedules';
import K8sRightsizing from './pages/K8sRightsizing';
import Archive from './pages/Archive';
import CostComparison from './pages/CostComparison';
import UserManagement from './pages/UserManagement';
import Integrations from './pages/Integrations';
import Events from './pages/Events';
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';
import DataSources from './pages/DataSources';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Redirect base to /home */}
          {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
             <Route path="/" element={<Navigate to="/signup" replace />} />

          {/* Auth Pages */}
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />

          {/* Main Dashboard Layout Routes */}
          <Route path="/" element={<MainDashboard />}>
            <Route path="home" element={<Dashboard />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="resources" element={<Resources />} />
            <Route path="pools" element={<Pools />} />
            <Route path="shared-environments" element={<SharedEnvironments />} />
            <Route path="cost-explorer" element={<CostExplorer />} />
            <Route path="cost-map" element={<CostMap />} />
            <Route path="finops-portal" element={<FinOpsPortal />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="models" element={<Models />} />
            <Route path="datasets" element={<Datasets />} />
            <Route path="artifacts" element={<Artifacts />} />
            <Route path="hypertuning" element={<Hypertuning />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="anomaly-detection" element={<AnomalyDetection />} />
            <Route path="quotas-and-budgetssets" element={<QuotasAndBudgetssets />} />
            <Route path="tagging" element={<Tagging />} />
            <Route path="resource-lifecycle" element={<ResourceLifecycle />} />
            <Route path="power-schedules" element={<PowerSchedules />} />
            <Route path="k8s-rightsizing" element={<K8sRightsizing />} />
            <Route path="archive" element={<Archive />} />
            <Route path="cost-comparison" element={<CostComparison />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="data-sources" element={<DataSources />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="events" element={<Events />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
