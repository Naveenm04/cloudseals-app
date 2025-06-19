import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <select value={filters.provider} onChange={e => onFilterChange('provider', e.target.value)}>
        <option value="">All Providers</option>
        <option value="AWS">AWS</option>
        <option value="Azure">Azure</option>
        <option value="GCP">GCP</option>
      </select>
      <select value={filters.region} onChange={e => onFilterChange('region', e.target.value)}>
        <option value="">All Regions</option>
        <option value="us-east">US-East</option>
        <option value="europe-west">Europe-West</option>
      </select>
      <select value={filters.status} onChange={e => onFilterChange('status', e.target.value)}>
        <option value="">All Status</option>
        <option value="Running">Running</option>
        <option value="Stopped">Stopped</option>
      </select>
      <select value={filters.type} onChange={e => onFilterChange('type', e.target.value)}>
        <option value="">All Types</option>
        <option value="Compute">Compute</option>
        <option value="Storage">Storage</option>
        <option value="Database">Database</option>
        <option value="Network">Network</option>
      </select>
    </div>
  );
};

export default FilterBar;
