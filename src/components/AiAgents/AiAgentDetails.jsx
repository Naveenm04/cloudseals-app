// src/components/AiAgents/AiAgentDetails.jsx
import React from 'react';
import './AiAgents.css';

const AiAgentDetails = ({ agent, onBack }) => {
  if (!agent) return null;

  return (
    <div className="ai-agent-details">
      <button className="btn-back" onClick={onBack}>&larr; Back</button>
      <h2 className="heading">Agent: {agent.name}</h2>
      <div className="detail-row"><strong>Status:</strong> <span className={`status ${agent.status.toLowerCase()}`}>{agent.status}</span></div>
      <div className="detail-row">
        <strong>Logs:</strong>
        <pre className="logs">{agent.logs}</pre>
      </div>
      <div className="detail-row">
        <strong>Explainability:</strong>
        <p>{agent.explainability}</p>
      </div>
    </div>
  );
};

export default AiAgentDetails;