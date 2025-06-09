import React, { useState } from 'react';
import OrganizationOverview from './OrganizationOverview/OrganizationOverview';
import AssignmentRulesTable from './AssignmentRules/AssignmentRulesTable';

const Resources = () => {
  const [showAssignmentRules, setShowAssignmentRules] = useState(false);

  const handleShowRules = () => {
    setShowAssignmentRules(true);
  };

  const handleBackToOverview = () => {
    setShowAssignmentRules(false);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-columns">
          {showAssignmentRules ? (
            <AssignmentRulesTable onBack={handleBackToOverview} />
          ) : (
            <OrganizationOverview onConfigureRules={handleShowRules} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
