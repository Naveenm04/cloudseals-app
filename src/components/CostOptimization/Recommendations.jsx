// src/components/CostOptimization/Recommendations.jsx
import React from 'react';
import './CostOptimization.css';

const Recommendations = () => {
  return (
    <div className="cost-section">
      <h2 className="section-title">Cost Optimization Recommendations</h2>
      <ul className="recommendations-list">
        <li>Reduce idle VMs in region US-West.</li>
        <li>Scale down Kubernetes nodes during off-peak hours.</li>
        <li>Convert pay-as-you-go instances to reserved instances.</li>
      </ul>
    </div>
  );
};

export default Recommendations;