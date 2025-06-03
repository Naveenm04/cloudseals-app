import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import SignUpForm from './components/Auth/SignUpForm';
import SignInForm from './components/Auth/SignInForm';
import Recommendations from './pages/Recommendations';
import Resources from './pages/Resources';
import Pools from './pages/Pools';
import SharedEnvironments from './pages/SharedEnvironments';
import CostExplorer from './pages/CostExplorer';
import CostMap from './pages/CostMap';
import FinOpsPortal from './pages/FinOpsPortal';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleRegisterClick = () => {
    setShowSignUp(true);
  };

  return (
  <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          
          <Route path="/recommendations" element={<MainDashboard />} />
          <Route path="/resources" element={<MainDashboard />} />
          <Route path="/pools" element={<MainDashboard />} />
          <Route path="/shared-environments" element={<MainDashboard />} />
          <Route path="/cost-explorer" element={<MainDashboard />} />
          <Route path="/cost-map" element={<MainDashboard />} />
          <Route path="/finops-portal" element={<MainDashboard />} />
          
          {/* fallback route */}
          <Route path="/*" element={<MainDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
