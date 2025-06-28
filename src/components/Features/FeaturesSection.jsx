import React from 'react';
import './FeaturesSection.css';
import { FaCloud, FaShieldAlt, FaRobot, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';


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
  const { theme, toggleTheme } = useTheme(); // ✅ Get theme and toggle

  return (
    <section className={`features-section ${theme}`}>
      <div className="section-divider-top"></div>


      <h2 className="features-title">Product Highlights</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href={feature.link} className="read-more">Read More →</a>
          </motion.div>
        ))}
      </div>

      <div className="section-divider-bottom"></div>
       {/* ✅ Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </section>
  );
};

export default FeaturesSection;
