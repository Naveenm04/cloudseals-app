// src/components/CostOptimization.jsx
import React from 'react';
import Recommendations from './CostOptimization/Recommendations';
import ApprovalWorkflow from './CostOptimization/ApprovalWorkflow';
import SavingsChart from './CostOptimization/SavingsChart';
import './CostOptimization/CostOptimization.css';

const CostOptimization = () => {
  return (
    <div className="cost-wrapper">
      <Recommendations />
      <ApprovalWorkflow />
      <SavingsChart />
    </div>
  );
};

export default CostOptimization;