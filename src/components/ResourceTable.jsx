import React from 'react';
import './DashboardWidget.css'; 


const ResourceTable = () => {
  const resources = [
    { name: 'EC2 Instance', cost: '$120.00', tags: ['prod', 'critical'] },
    { name: 'S3 Storage', cost: '$45.00', tags: ['backup', 'non-critical'] },
    { name: 'RDS Database', cost: '$300.00', tags: ['prod', 'high-availability'] },
    { name: 'CloudFront CDN', cost: '$80.00', tags: ['performance'] }
  ];

  return (
    <div className="dashboard-panel">
      <h2>Resources ↗</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Monthly Cost</th><th>Tags</th></tr>
        </thead>
        <tbody>
          {resources.map((resource, idx) => (
            <tr key={idx}>
              <td>{resource.name}</td>
              <td>{resource.cost}</td>
              <td>
                {resource.tags.map((tag, i) => (
                  <span key={i} className="badge">{tag}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total: {resources.length}</div>
    </div>
  );
};

export default ResourceTable;

