import React from 'react';
import './SourceBreakdown.css';

const data = [
  { name: 'AWS HQ', value: 6175.96, percent: '40%' },
  { name: 'GCP dev', value: 2130.37, percent: '14%' },
  { name: 'AWS Marketing', value: 1899.37, percent: '12%' },
  { name: 'Dev environment', value: 1858.02, percent: '12%' },
  { name: 'Ali dev', value: 1353.84, percent: '9%' },
  { name: 'K8s dev', value: 1096.14, percent: '7%' },
  { name: 'Azure QA', value: 626.05, percent: '4%' },
  { name: 'Environment', value: 166.0, percent: '1%' },
];

const SourceSummary = () => {
  return (
    <div className="summary-table">
      <h4>Summary by data source 📊</h4>
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
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>${item.value.toLocaleString()}</td>
              <td>{item.percent}</td>
              <td>📊</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: {data.length}</div>
    </div>
  );
};

export default SourceSummary;
