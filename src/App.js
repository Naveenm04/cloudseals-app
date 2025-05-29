import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import SignUpForm from './components/Auth/SignUpForm';
import SignInForm from './components/Auth/SignInForm';
// import MainDashboard from './pages/MainDashboard';

import Recommendations from './pages/Recommendations';
import Resources from './pages/Resources';
import Pools from './pages/Pools';
import SharedEnvironments from './pages/SharedEnvironments';
import CostExplorer from './pages/CostExplorer';
import CostMap from './pages/CostMap';
import FinOpsPortal from './pages/FinOpsPortal';
import { ThemeProvider } from './context/ThemeContext';
// import '../styles/theme.css';




function App() {
  return (
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        {/* <Route path="/home" element={<MainDashboard />} /> */}
        <Route path="/*" element={<MainDashboard />} />
         <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/shared-environments" element={<SharedEnvironments />} />
            <Route path="/cost-explorer" element={<CostExplorer />} />
            <Route path="/cost-map" element={<CostMap />} />
            <Route path="/finops-portal" element={<FinOpsPortal />} />
            {/* <Route path="/recommendations-widget" element={<RecommendationsWidget/>}/> */}
          
            
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
