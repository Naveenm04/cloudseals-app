// src/components/ModelTable.jsx
import React from 'react';

const ModelTable = () => {
  const models = [
    { name: 'Digital Recognizer', version: '13', aliases: ['champion: 13'] },
    { name: 'House prices model', version: '66', aliases: ['prod: 4', 'champion: 4'] },
    { name: 'Iris model testing', version: '60', aliases: ['champion: Version 2', 'challenger: Version 1'] },
    { name: 'Iris model prod', version: 'Version 1', aliases: ['champion: Version 1'] }
  ];

  return (
    <div className="dashboard-panel">
      <h2>Models ↗</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Version</th><th>Used aliases</th></tr>
        </thead>
        <tbody>
          {models.map((model, idx) => (
            <tr key={idx}>
              <td>{model.name}</td>
              <td>{model.version}</td>
              <td>
                {model.aliases.map((alias, i) => (
                  <span key={i} className="badge">{alias}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total: {models.length}</div>
    </div>
  );
};

export default ModelTable;
