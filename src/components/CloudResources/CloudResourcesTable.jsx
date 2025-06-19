import React from 'react';

const CloudResourcesTable = ({ data }) => {
  const handleAction = (action, id) => {
    alert(`${action} clicked for asset ID: ${id}`);
  };

  return (
    <table className="cloud-resources-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Provider</th>
          <th>Region</th>
          <th>Status</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(asset => (
          <tr key={asset.id}>
            <td>{asset.id}</td>
            <td>{asset.provider}</td>
            <td>{asset.region}</td>
            <td>{asset.status}</td>
            <td>{asset.type}</td>
            <td>
              <button onClick={() => handleAction('Scale', asset.id)}>Scale</button>
              <button onClick={() => handleAction('Tag', asset.id)}>Tag</button>
              <button onClick={() => handleAction('Audit', asset.id)}>Audit</button>
              <button onClick={() => handleAction('Explain', asset.id)}>Explain</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CloudResourcesTable;
