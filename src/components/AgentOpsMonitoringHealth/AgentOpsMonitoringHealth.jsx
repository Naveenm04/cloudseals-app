import React from 'react';
import './AgentOpsMonitoringHealth.css';
import AgentHealthMonitor from './AgentHealthMonitor';
import SelfHealingLogsFeedback from './SelfHealingLogsFeedback';

const AgentOpsMonitoringHealth = () => {
  return (
    <div className="agentops-container">
      <h2>AgentOps (Monitoring & Health)</h2>
      <AgentHealthMonitor />
      <SelfHealingLogsFeedback />
    </div>
  );
};

export default AgentOpsMonitoringHealth;
