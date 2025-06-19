// src/components/WorkflowsAutomations.jsx
import React, { useState } from 'react';
import WorkflowEditor from './WorkflowsAutomations/WorkflowEditor';
import WorkflowLogs from './WorkflowsAutomations/WorkflowLogs';
import './WorkflowsAutomations/Workflows.css';

const WorkflowsAutomations = () => {
  const [tab, setTab] = useState('editor');

  return (
    <div className="workflow-wrapper">
      <div className="tab-switcher">
        <button className={tab === 'editor' ? 'active' : ''} onClick={() => setTab('editor')}>DAG Editor</button>
        <button className={tab === 'logs' ? 'active' : ''} onClick={() => setTab('logs')}>Logs</button>
      </div>

      {tab === 'editor' ? <WorkflowEditor /> : <WorkflowLogs />}
    </div>
  );
};

export default WorkflowsAutomations;