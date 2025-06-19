import React from 'react';
import './DashboardOverview.css';

const KPIWidgets = () => (
  <div className="kpi-widgets">
    {['Cloud Spend', 'Compliance', 'Incidents'].map((item, i) => (
      <div className="widget" key={i}>
        <h3>{item}</h3>
        <p>$123.45K</p>
      </div>
    ))}
  </div>
);

export default KPIWidgets;
