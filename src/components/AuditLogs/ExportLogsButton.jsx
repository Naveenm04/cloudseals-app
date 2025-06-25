import React from 'react';

const ExportLogsButton = () => {
  const handleExport = () => {
    alert('Logs exported to CSV (simulation)');
    // Future: Convert data and trigger download
  };

  return (
    <button className="export-btn" onClick={handleExport}>
      Export Logs
    </button>
  );
};

export default ExportLogsButton;
