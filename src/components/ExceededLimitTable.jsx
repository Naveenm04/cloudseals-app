// src/components/ExceededLimitTable.jsx
import React from 'react';

const ExceededLimitTable = () => {
  const pools = [
    { name: 'Dev environment', expense: '$10,440.18 (x2)', forecast: '$12,286.63 (x2.3)', icon: '🧱' },
    { name: 'Ali dev', expense: '$9,316.24 (x2.7)', forecast: '$10,987.85 (x3.2)', icon: '🧱' },
    { name: 'Marketing', expense: '$6,378.1 (x17.2)', forecast: '$7,097.84 (x19.1)', icon: '🏢' },
    { name: 'Clicks research', expense: '$6,378.1 (x17.2)', forecast: '$7,097.84 (x19.1)', icon: '📈' }
  ];

  return (
    <div className="dashboard-panel">
      <h2>Pools Requiring Attention ↗</h2>
      <div className="tabs">
        <span className="tab active">EXCEEDED LIMIT</span>
        <span className="tab">FORECASTED OVERSPEND</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Expenses this month</th>
            <th>Forecast this month</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pools.map((pool, idx) => (
            <tr key={idx}>
              <td>{pool.icon} {pool.name}</td>
              <td className="expense">{pool.expense}</td>
              <td className="forecast">{pool.forecast}</td>
              <td className="actions">📋 📊</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total: {pools.length}</div>
    </div>
  );
};

export default ExceededLimitTable;
