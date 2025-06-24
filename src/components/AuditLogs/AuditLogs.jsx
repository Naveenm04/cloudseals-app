import React from 'react';
import './AuditLogs.css';
import AuditLogsTable from './AuditLogsTable';
import ExportLogsButton from './ExportLogsButton';

const AuditLogs = () => {
  return (
    <div className="audit-logs-container">
      <h2>Audit Logs</h2>
      <p>Search, filter, and export logs from the system audit trail.</p>
      <ExportLogsButton />
      <AuditLogsTable />
    </div>
  );
};

export default AuditLogs;
