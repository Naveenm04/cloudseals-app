import React from 'react';
import './PoolSummary.css';

const poolData = [
  { name: 'AWS HQ', value: 5239.87, percent: '34%' },
  { name: 'GCP dev', value: 2083.32, percent: '14%' },
  { name: 'AWS Marketing', value: 1899.37, percent: '12%' },
  { name: 'Dev environment', value: 1525.68, percent: '10%' },
  { name: 'Ali dev', value: 1353.84, percent: '9%' },
  { name: 'K8s dev', value: 1096.14, percent: '7%' },
  { name: 'Clicks research', value: 927.38, percent: '6%' },
  { name: 'Azure QA', value: 626.05, percent: '4%' },
  { name: 'Dev', value: 332.33, percent: '2%' },
  { name: 'Environment', value: 166, percent: '1%' },
  { name: 'QA', value: 49.81, percent: '0%' },
  { name: 'Sunflower Inc', value: 5.95, percent: '0%' },
];

const PoolSummary = () => {
  return (
    <div className="pool-summary">
      <h4>Summary by pool</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Expenses (Jun 01 - Jun 09)</th>
            <th>Percent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {poolData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>${item.value.toLocaleString()}</td>
              <td>{item.percent}</td>
              <td>📊</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: {poolData.length}</div>
    </div>
  );
};

export default PoolSummary;
