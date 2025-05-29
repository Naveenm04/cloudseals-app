import React, { useState } from 'react';
import './DataSourceDropdown.css';

const dataSources = [
  { id: 'ali', label: 'Ali dev', icon: '🔁' },
  { id: 'aws-hq', label: 'AWS HQ', icon: '🟠' },
  { id: 'aws-mkt', label: 'AWS Marketing', icon: '🟠' },
  { id: 'azure-qa', label: 'Azure QA', icon: '🔵' },
  { id: 'dev-env', label: 'Dev environment', icon: '🔵' },
  { id: 'gcp-dev', label: 'GCP dev', icon: '🌈' }
];

const DataSourceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('All');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectSource = (label) => {
    setSelected(label);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-trigger" onClick={toggleDropdown}>
        {selected}
        <span className="arrow">▾</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {dataSources.map((src) => (
            <div
              key={src.id}
              className="dropdown-item"
              onClick={() => selectSource(src.label)}
            >
              <input type="checkbox" readOnly />
              <span className="icon">{src.icon}</span>
              {src.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataSourceDropdown;
