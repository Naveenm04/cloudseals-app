// src/components/AiAgents.jsx
import React, { useState } from 'react';
import AiAgentsList from './AiAgents/AiAgentsList';
import AiAgentDetails from './AiAgents/AiAgentDetails';
import './AiAgents/AiAgents.css';

const dummyAgents = [
  {
    name: 'Agent Alpha',
    status: 'Running',
    deployedAt: '2025-06-01',
    logs: 'System initialized...\nHealth check passed...',
    explainability: 'Model explains decisions based on rules and weights.'
  },
  {
    name: 'Agent Beta',
    status: 'Idle',
    deployedAt: '2025-05-20',
    logs: 'No recent activity. Last run at 2025-06-18.',
    explainability: 'This agent is waiting for new data inputs.'
  }
];

const AiAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="ai-agents-wrapper">
      {!selectedAgent ? (
        <AiAgentsList agents={dummyAgents} onSelect={setSelectedAgent} />
      ) : (
        <AiAgentDetails agent={selectedAgent} onBack={() => setSelectedAgent(null)} />
      )}
    </div>
  );
};

export default AiAgents;