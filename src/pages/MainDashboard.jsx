import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Recommendations from '../components/Recommendations';
import Resources from '../components/Resources';
import Pools from '../components/Pools';
import SharedEnvironments from '../components/SharedEnvironments';
import CostExplorer from '../components/CostExplorer';
import CostMap from '../components/CostMap';
import FinOpsPortal from '../components/FinOpsPortal';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/theme.css';
import {
  FaRegStar,
  FaBuilding,
  FaBookOpen,
  FaQuestionCircle,
  FaGraduationCap,
  FaUserCircle
} from 'react-icons/fa';
import '../styles/Home.css';

const MainDashboard = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState('CloudSeals');
  const navigate = useNavigate();

  const sampleOrganizations = ['CloudSeals', 'SkyNet Corp', 'DataWaves', 'InfraNova'];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'home': return <Dashboard />;
      case 'recommendations': return <Recommendations />;
      case 'resources': return <Resources />;
      case 'pools': return <Pools />;
      case 'shared-environments': return <SharedEnvironments />;
      case 'cost-explorer': return <CostExplorer />;
      case 'cost-map': return <CostMap />;
      case 'finops-portal': return <FinOpsPortal />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="home-wrapper font-sans text-sm">
      {/* Alert Bar */}
      {showAlert && (
        <div className="top-alert">
          <span>
            Please consider giving CloudSeals a{' '}
            <button className="star-button"><FaRegStar /> Star <b>1,473</b></button> on GitHub.
          </span>
          <button onClick={() => setShowAlert(false)} className="dismiss-button">✖</button>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <span className="logo-text">Cloudseals</span>
            <a
              className="demo-tag"
              href="https://www.openops.com/"
              target="_blank"
              rel="noopener noreferrer"
            >DEMO</a>
          </div>
          <span className="demo-mode">You are in a live demo mode</span>
          <button className="register-button" onClick={() => navigate('/signup')}>REGISTER</button>
        </div>

        <div className="header-right relative">
          <div className="org-selector cursor-pointer" onClick={() => setOrgDropdownOpen(prev => !prev)}>
            <FaBuilding /> {selectedOrg} ▾
          </div>

          {orgDropdownOpen && (
            <div className="org-dropdown-menu absolute right-0 mt-1 bg-white border rounded shadow z-10">
              {sampleOrganizations.map((org, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedOrg(org);
                    setOrgDropdownOpen(false);
                  }}
                  className="dropdown-item px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {org}
                </div>
              ))}
            </div>
          )}

          <FaBookOpen className="header-icon" />
          <FaQuestionCircle className="header-icon" />
          <FaGraduationCap className="header-icon" />
          <ThemeToggle />
          <div className="user-icon-wrapper">
            <FaUserCircle className="header-icon" />
            <div className="user-name-tooltip">User Profile</div>
          </div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="home-page-layout flex">
        <Sidebar onMenuSelect={setSelectedMenu} selectedMenu={selectedMenu} />
        <div className="home-container flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
