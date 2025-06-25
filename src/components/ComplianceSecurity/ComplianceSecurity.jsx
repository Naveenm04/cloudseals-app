import React from 'react';
import ComplianceControls from './ComplianceControls';
import IncidentTracking from './IncidentTracking';
import './ComplianceSecurity.css';

const ComplianceSecurity = () => {
  return (
    <div className="compliance-security">
      <h2>Compliance & Security</h2>
      <ComplianceControls />
      <IncidentTracking />
    </div>
  );
};

export default ComplianceSecurity;
