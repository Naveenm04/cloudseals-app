import React, { useState } from 'react';
import FilterBar from './FilterBar';
import CloudResourcesTable from './CloudResourcesTable';
import './../../../styles/CloudResources.css';
import mockAssets from '../../../data/mockCloudAssets';

const CloudResources = () => {
  const [filters, setFilters] = useState({
    provider: '',
    region: '',
    status: '',
    type: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredAssets = mockAssets.filter(asset => {
    return (
      (!filters.provider || asset.provider === filters.provider) &&
      (!filters.region || asset.region === filters.region) &&
      (!filters.status || asset.status === filters.status) &&
      (!filters.type || asset.type === filters.type)
    );
  });

  return (
    <div className="cloud-resources-container">
      <h2>Cloud Resources</h2>
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <CloudResourcesTable data={filteredAssets} />
    </div>
  );
};

export default CloudResources;
