import React from 'react';
import SummaryCards from './SummaryCards';
import FilterButtons from './FilterButtons';
import ActionBar from './ActionBar';
import DateRangePicker from './DateRangePicker';
import './styles.css';

const ResourcesDashboard = () => {
  return (
    <div className="resources-dashboard">
      <div className="header-section">
        <h2 className="title">Resources</h2>
        <ActionBar />
      </div>

      <div className="cards-section">
        <SummaryCards />
      </div>

      <div className="filters-section">
        <FilterButtons />
      </div>

      <div className="date-section">
        <DateRangePicker />
      </div>
    </div>
  );
};

export default ResourcesDashboard;
