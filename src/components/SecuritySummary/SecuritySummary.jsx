import React, { useState } from 'react';
import './SecuritySummary.css';

const SecurityCard = ({ title, count, children, items }) => (
  <div className="security-card">
    <div className="card-header">
      <h3>{title}</h3>
      <span className="card-count">{count} count</span>
    </div>
    <div className="card-body">
      {children}
      <ul className="item-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <a href="#" className="see-all">See all {count} items</a>
    </div>
  </div>
);

const SecuritySummary = () => {
  const [category, setCategory] = useState('Security');
  const [service, setService] = useState('All');
  const [view, setView] = useState('Cards');
  const [search, setSearch] = useState('');

  return (
    <div className="security-summary">
      <div className="filters">
        <div className="dropdown-group">
          <label>Categories</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>All</option>
            <option>Savings</option>
            <option>Security</option>
            <option>Critical</option>
            <option>Non-empty</option>
          </select>
        </div>

        <div className="dropdown-group">
          <label>Applicable services</label>
          <select value={service} onChange={e => setService(e.target.value)}>
            <option>All</option>
            <option>IAM</option>
            <option>EC2</option>
            <option>S3</option>
          </select>
        </div>

        <div className="view-toggle">
          <button className={view === 'Cards' ? 'active' : ''} onClick={() => setView('Cards')}>Cards</button>
          <button className={view === 'Table' ? 'active' : ''} onClick={() => setView('Table')}>Table</button>
        </div>

        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="card-grid">
        <SecurityCard title="Inactive IAM users" count="62" items={['test-doc-user', 'am-full-user', 'vl-full']}>
          <p>The following IAM users are inactive for more than <strong>91 days</strong>. Consider their deletion.</p>
        </SecurityCard>
        <SecurityCard title="Instances with insecure Security Groups settings" count="35" items={['i-081ab9de8dc20914c', 'i-0436ee72bb653bf8a', 'i-0729a34d6f5b91f83']}>
          <p>Some active instances have attached Security Groups with inbound ports that are considered insecure. Consider changing Security Groups, restricting these ports only to a specific IP range to increase security.</p>
        </SecurityCard>
        <SecurityCard title="Public S3 buckets" count="4" items={['sunflower-lily-share', 'nk-bucket', 'sunflower-static-files']}>
          <p>The following S3 buckets are public. Please ensure that the buckets use the correct policies and are not publicly accessible unless explicitly required.</p>
        </SecurityCard>
        <SecurityCard title="IAM users with unused console access" count="3" items={['yr-admin-console', 'aqa-user', 'pk-full']}>
          <p>The following active IAM users have console access turned on but have not been using it for more than <strong>91 days</strong>. Consider revoking console access to increase security.</p>
        </SecurityCard>
      </div>
    </div>
  );
};

export default SecuritySummary;
