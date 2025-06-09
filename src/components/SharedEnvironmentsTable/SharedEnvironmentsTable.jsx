import React from 'react';
import './SharedEnvironmentsTable.css';
import { environments } from './data';

const SharedEnvironmentsTable = () => {
  return (
    <div className="shared-env-container">
      <div className="header">
        <h2>Shared Environments</h2>
        <div className="header-controls">
          <button className="tab active">Table</button>
          <button className="tab">Calendar</button>
          <label>
            <input type="checkbox" /> Only accessible by me
          </label>
          <select>
            <option>Any status</option>
          </select>
          <button className="add-btn">+ ADD</button>
        </div>
      </div>

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
                <div className="env-name">{env.name}</div>
                <div className="env-type">{env.type}</div>
              </td>
              <td><span className="link">Environment</span></td>
              <td>
                <div className={`status ${env.status.toLowerCase()}`}>
                  {env.status}
                </div>
                {env.status === 'IN USE' && (
                  <div className="user-info">
                    User: <strong>{env.user}</strong><br />
                    Until: {env.until}
                  </div>
                )}
              </td>
              <td>-</td>
              <td>
                {env.tickets.map((ticket, tIdx) => (
                  <div className="ticket" key={tIdx}>{ticket}</div>
                ))}
              </td>
              <td className="software">{env.software}</td>
              <td className="actions">
                <button title="Power"><span>⏻</span></button>
                <button title="Delete" className="delete"><span>🗑️</span></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer-note">
        <span className="info-icon">ℹ️</span> You can create Shared Environments for on-premise or existing cloud resources (instances or clusters). Shared Environments can be used to track and organize their usage for testing and development purposes.
      </div>
    </div>
  );
};

export default SharedEnvironmentsTable;
