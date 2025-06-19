// src/components/AiAgents/AiAgentsList.jsx
import React from 'react';
import './AiAgents.css';

const AiAgentsList = ({ agents, onSelect }) => {
  return (
    <div className="ai-agents-list">
      <h2 className="heading">AI Agents</h2>
      <table className="agents-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Deployed At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td><span className={`status ${agent.status.toLowerCase()}`}>{agent.status}</span></td>
              <td>{agent.deployedAt}</td>
              <td>
                <button className="btn-view" onClick={() => onSelect(agent)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AiAgentsList;