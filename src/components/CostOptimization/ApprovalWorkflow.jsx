// src/components/CostOptimization/ApprovalWorkflow.jsx
import React from 'react';
import './CostOptimization.css';

const ApprovalWorkflow = () => {
  return (
    <div className="cost-section">
      <h2 className="section-title">Approval Workflow</h2>
      <p className="description">Admins can review and approve recommended optimizations before applying changes.</p>
      <button className="approve-btn">Review Pending Approvals</button>
    </div>
  );
};

export default ApprovalWorkflow;
