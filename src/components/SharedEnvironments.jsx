import React, { useState } from 'react';
import EnvironmentTable from './SharedEnvironments/EnvironmentTable';
import EnvironmentCalendar from './SharedEnvironments/EnvironmentCalendar';
import './SharedEnvironments/EnvironmentTable.css';

const SharedEnvironments = () => {
  const [view, setView] = useState('table');

  return (
    <div className="env-wrapper">
      <h2 className="env-title">Shared Environments</h2>
      <div className="env-controls">
        <div className="env-tabs">
          <button className={`tab ${view === 'table' ? 'active' : ''}`} onClick={() => setView('table')}>Table</button>
          <button className={`tab ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>Calendar</button>
        </div>
        <label>
          <input type="checkbox" defaultChecked />
          Only accessible by me
        </label>
        <select className="status-dropdown">
          <option>Any status</option>
        </select>
        <input className="search-input" type="search" placeholder="Search" />
      </div>

      {view === 'table' ? <EnvironmentTable /> : <EnvironmentCalendar />}
    </div>
  );
};

export default SharedEnvironments;
