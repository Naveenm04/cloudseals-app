// src/components/Settings/Settings.jsx
import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-section">
        <h2>User Profile</h2>
        <p>Update profile details and notification preferences.</p>
        <input className="settings-input" placeholder="Your name" />
        <input className="settings-input" placeholder="Email address" />
        <select className="settings-select">
          <option>Email Notifications</option>
          <option>Enable</option>
          <option>Disable</option>
        </select>
        <button className="settings-btn">Save Changes</button>
      </div>

      <div className="settings-section">
        <h2>Integrations</h2>
        <p>Connect external tools like Slack, Jira, etc.</p>
        <input className="settings-input" placeholder="Slack Webhook URL" />
        <input className="settings-input" placeholder="Jira API Token" />
        <button className="settings-btn">Connect</button>
      </div>
    </div>
  );
};

export default Settings;
