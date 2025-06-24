import React, { useState } from 'react';

const logsMock = [
  { id: 1, user: 'admin', action: 'Login', time: '2024-06-01 10:30' },
  { id: 2, user: 'john', action: 'Deleted VM', time: '2024-06-02 12:00' },
  { id: 3, user: 'sara', action: 'Updated policy', time: '2024-06-03 14:15' },
];

const AuditLogsTable = () => {
  const [search, setSearch] = useState('');

  const filtered = logsMock.filter(log =>
    log.user.toLowerCase().includes(search.toLowerCase()) ||
    log.action.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="audit-table-wrapper">
      <input
        type="text"
        placeholder="Search logs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table className="audit-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(log => (
            <tr key={log.id}>
              <td>{log.user}</td>
              <td>{log.action}</td>
              <td>{log.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogsTable;
