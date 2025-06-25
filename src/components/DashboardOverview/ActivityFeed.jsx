// src/components/DashboardOverview/ActivityFeed.jsx
import React from 'react';
import './DashboardOverview.css';

const ActivityFeed = () => (
  <section className="activity-feed">
    <h3>Recent Activity</h3>
    <ul>
      <li>New VM deployed in US-East.</li>
      <li>Cost optimization applied on storage.</li>
      <li>User John updated compliance policy.</li>
    </ul>
  </section>
);

export default ActivityFeed;
