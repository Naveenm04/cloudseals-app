// src/components/Hero/HeroSection.jsx
import React from 'react';
import heroImage from '../../assets/hero-illustration.jpg'; // Place image here
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Empowering Cloud Optimization with AI Agents</h1>
        <p>Smart tools to help you reduce costs, manage resources, and scale efficiently.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="AI illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
