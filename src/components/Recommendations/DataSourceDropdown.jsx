import React, { useState } from 'react';
import './DataSourceDropdown.css';

const dataSources = [
  { id: 'ali', label: 'Ali dev', iconClass: 'icon-ali' },
  { id: 'aws-hq', label: 'AWS HQ', iconClass: 'icon-aws-orange' },
  { id: 'aws-mkt', label: 'AWS Marketing', iconClass: 'icon-aws-orange' },
  { id: 'azure-qa', label: 'Azure QA', iconClass: 'icon-azure' },
  { id: 'dev-env', label: 'Dev environment', iconClass: 'icon-dev-env' },
  { id: 'gcp-dev', label: 'GCP dev', iconClass: 'icon-gcp' }
];

const DataSourceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleSource = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const getSelectedLabel = () => {
    if (selected.length === 0) return 'All';
    return `${selected.length} selected`;
  };

  return (
    <div className="dropdown">
      <div className="dropdown-label">Data sources</div>
      <div className="dropdown-trigger" onClick={toggleDropdown}>
        {getSelectedLabel()}
        <span className="arrow">▾</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {dataSources.map((src) => (
            <label key={src.id} className="dropdown-item">
              <input
                type="checkbox"
                checked={selected.includes(src.id)}
                onChange={() => toggleSource(src.id)}
              />
              <span className={`icon-circle ${src.iconClass}`}></span>
              {src.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataSourceDropdown;
