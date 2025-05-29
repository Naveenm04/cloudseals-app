// src/components/RecommendationsWidget.jsx
import React from 'react';
import './DashboardWidget.css';

const RecommendationsWidget = () => {
  const recommendations = {
    savingsCurrent: 98965.32,
    savingsMax: 124971.26,
    types: [
      { label: 'Cost', value: 583, icon: '💰', bg: 'bg-green' },
      { label: 'Security', value: 104, icon: '🛡️', bg: 'bg-yellow' },
      { label: 'Critical', value: 0, icon: '⚠️', bg: 'bg-red' }
    ]
  };

  return (
    <div className="dashboard-panel">
      <div className="header">
        <span className="title">Recommendations</span>
        <span className="icon">↗</span>
      </div>
      <div className="savings-label">
        Possible monthly savings <span className="tooltip-icon">❔</span>
      </div>
      <div className="savings-bar">
        <div
          className="savings-current"
          style={{
            width: `${(recommendations.savingsCurrent / recommendations.savingsMax) * 100}%`
          }}
        >
          ${recommendations.savingsCurrent.toLocaleString()}
        </div>
        <div className="savings-max">
          ${recommendations.savingsMax.toLocaleString()}
        </div>
      </div>

      <div className="recommendation-cards">
        {recommendations.types.map((type, idx) => (
          <div key={idx} className={`card ${type.bg}`}>
            <div className="card-icon">{type.icon}</div>
            <div className="card-label">{type.label}</div>
            <div className="card-value">{type.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsWidget;
