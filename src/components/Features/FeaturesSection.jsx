// src/components/Features/FeaturesSection.jsx
import React from 'react';
import './FeaturesSection.css';
import { FaCloud, FaShieldAlt, FaRobot, FaEye } from 'react-icons/fa';

const features = [
  {
    icon: <FaCloud />,
    title: 'Multi-Cloud Orchestration',
    description: 'Manage resources seamlessly across AWS, Azure, and GCP.',
    link: '#',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Ethical AI',
    description: 'Ensure fairness, transparency, and accountability in decision making.',
    link: '#',
  },
  {
    icon: <FaRobot />,
    title: 'AgentOps',
    description: 'Autonomous AI agents to optimize and operate cloud workloads.',
    link: '#',
  },
  {
    icon: <FaEye />,
    title: 'Explainable Decisions',
    description: 'Understand why AI made a decision with detailed traceability.',
    link: '#',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Product Highlights</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href={feature.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
