// src/components/ResourceTable/ResourceRow.jsx
import React from 'react';

const ResourceRow = ({ resource }) => {
  return (
    <div className="table-row">
      <div>
        <strong>{resource.name}</strong><br />
        {resource.description && <span>{resource.description}</span>}<br />
        <span className="status">🟢 {resource.status}</span><br />
        {resource.violations && <span className="violation">⚠️ Constraint violations</span>}
      </div>
      <div>
        ${resource.expense.toFixed(2)}<br />
        {resource.savings && <span className="savings">${resource.savings.toFixed(2)} possible monthly savings</span>}
      </div>
      <div>-</div>
      <div>
        First seen: <strong>{resource.metadata.firstSeen}</strong><br />
        Last seen: <strong>{resource.metadata.lastSeen}</strong><br />
        {resource.metadata.imageId && <span>Image id: <strong>{resource.metadata.imageId}</strong></span>}
      </div>
      <div>
        <strong>{resource.pool}</strong><br />
        {resource.owner}
      </div>
      <div>{resource.type}</div>
    </div>
  );
};

export default ResourceRow;