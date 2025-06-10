import React from 'react';
import environments from '../../data/environmentsData';
import './EnvironmentTable.css';

const EnvironmentTable = () => {
  return (
    <>
      <button className="add-btn">+ ADD</button>
      <table className="env-table">
        <thead>
          <tr>
            <th>Environment</th>
            <th>Pool</th>
            <th>Status</th>
            <th>Upcoming bookings</th>
            <th>Jira tickets</th>
            <th>Software</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {environments.map((env, idx) => (
            <tr key={idx}>
              <td>
                <div>
                  <div className="env-name">{env.name}</div>
                  <div className="env-type">{env.type}</div>
                </div>
              </td>
              <td>
                <strong className="pool-text">🏢 {env.pool}</strong>
              </td>
              <td>
                <span className={`status ${env.status === 'AVAILABLE' ? 'available' : 'in-use'}`}>
                  {env.status}
                </span>
                {env.user && (
                  <div className="user-info">
                    User: <strong>{env.user}</strong><br />
                    Until: <strong>{env.until}</strong>
                  </div>
                )}
              </td>
              <td>-</td>
              <td className="jira-links">
                {env.jira.map(j => (
                  <div key={j}><a href="#">{j}</a></div>
                ))}
              </td>
              <td>
                <a href="#">{env.software}</a>
              </td>
              <td>
                <button className="action-icon">⏻</button>
                <button className="action-icon delete">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="env-footer">
        <span>Total: {environments.length}</span>
        <span>Displayed: {environments.length}</span>
      </div>

      <div className="env-note">
        <p>
          <strong>ℹ</strong> You can create Shared Environments for on-premise or existing cloud resources
          (instances or clusters). Shared Environments can be used to track and organize their usage for testing and development purposes.
        </p>
      </div>
    </>
  );
};

export default EnvironmentTable;
