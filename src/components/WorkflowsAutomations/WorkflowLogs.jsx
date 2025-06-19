// src/components/WorkflowsAutomations/WorkflowLogs.jsx
import React from 'react';
import './Workflows.css';

const WorkflowLogs = () => {
  return (
    <div className="workflow-logs">
      <h2 className="heading">Workflow Run History / Logs</h2>
      <div className="log-box">
        <pre>{`[2025-06-18 14:21] Workflow started\n[2025-06-18 14:22] Step 1 completed\n[2025-06-18 14:25] Step 2 failed: Timeout\n[2025-06-18 14:26] Workflow terminated`}</pre>
      </div>
    </div>
  );
};

export default WorkflowLogs;
