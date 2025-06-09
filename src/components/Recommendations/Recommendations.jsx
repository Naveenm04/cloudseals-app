// src/components/Recommendations/Recommendations.jsx
import React, { useState } from 'react';
import './Recommendations.css';
import DataSourceDropdown from './DataSourceDropdown';

const Recommendations = () => {
  const [isForceCheckDisabled, setIsForceCheckDisabled] = useState(true);

  const handleArchiveClick = () => {
    console.log("ARCHIVE triggered");
    // Add your actual archive logic here
    alert("Archived successfully.");
  };

  const handleForceCheckClick = () => {
    if (isForceCheckDisabled) return;
    console.log("FORCE CHECK triggered");
    // Add your actual force check logic here
    alert("Force check started.");
  };

  return (
    <div className="recommendations-container">
      <h2>Recommendations</h2>

      <div className="top-bar">
        <label htmlFor="data-source">Data sources</label>
        <DataSourceDropdown />
        <div className="actions">
          <button className="action-btn" onClick={handleArchiveClick}>
            <span className="icon">⟳</span> ARCHIVE
          </button>
          <button
            className={`action-btn ${isForceCheckDisabled ? 'disabled' : ''}`}
            onClick={handleForceCheckClick}
            disabled={isForceCheckDisabled}
          >
            <span className="icon">⟳</span> FORCE CHECK
          </button>
        </div>
      </div>

      <div className="metrics-row">
        <div className="card">
          <div className="card-title">Possible monthly savings</div>
          <div className="card-value">$98.965k</div>
        </div>
        <div className="card">
          <div className="card-title">Last check time</div>
          <div className="card-value">14 hours ago</div>
        </div>
        <div className="card">
          <div className="card-title">Next check time</div>
          <div className="card-value">About to start</div>
        </div>
        <div className="card danger">
          <div className="card-title">Saved with commitments for the last 30 days</div>
          <div className="card-value">$276.78</div>
        </div>
        <div className="card danger">
          <div className="card-title">Compute expenses covered with commitments</div>
          <div className="card-value">4%</div>
        </div>
      </div>

      <div className="metrics-row">
        <div className="card">
          <div className="card-title">Duplicates found during last check</div>
          <div className="card-value">13.34 TB</div>
        </div>
        <div className="card">
          <div className="card-title">Possible monthly savings</div>
          <div className="card-value">$283.62</div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
