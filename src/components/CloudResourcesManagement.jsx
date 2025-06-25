// src/components/CloudResourcesManagement.jsx
import React from 'react';
import './CloudResourcesManagement.css';
import { Cpu, Database, Server, HardDrive, Globe } from 'lucide-react';

const CloudResourcesManagement = () => {
  const resources = [
    {
      title: 'Compute',
      description: 'Manage VMs, containers, and serverless workloads.',
      icon: <Cpu size={28} />,
    },
    {
      title: 'Storage',
      description: 'Monitor and optimize object, block, and file storage.',
      icon: <HardDrive size={28} />,
    },
    {
      title: 'Databases',
      description: 'Track and configure database instances and clusters.',
      icon: <Database size={28} />,
    },
    {
      title: 'Network',
      description: 'Manage VPCs, firewalls, load balancers, and endpoints.',
      icon: <Globe size={28} />,
    },
    {
      title: 'Servers',
      description: 'Inventory and track all provisioned virtual servers.',
      icon: <Server size={28} />,
    },
  ];

  return (
    <div className="crm-container">
      <h2>Cloud Resources Management</h2>
      <p className="crm-subtitle">
        Overview of all provisioned cloud infrastructure resources.
      </p>

      <div className="crm-grid">
        {resources.map((res, index) => (
          <div className="crm-card" key={index}>
            <div className="crm-icon">{res.icon}</div>
            <h3>{res.title}</h3>
            <p>{res.description}</p>
            <button className="crm-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudResourcesManagement;
