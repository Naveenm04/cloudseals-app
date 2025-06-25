import React from 'react';
import MetricsReport from './MetricsReport';
import './BiasFairnessAnalytics.css';

const BiasFairnessAnalytics = () => {
  return (
    <div className="bias-analytics">
      <h2>Bias & Fairness Analytics</h2>
      <MetricsReport />
    </div>
  );
};

export default BiasFairnessAnalytics;
