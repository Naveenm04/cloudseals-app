// src/components/Hero/HeroSection.jsx
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/hero-animation.json'; // Add a Lottie JSON animation file here
import './HeroSection.css';

const HeroSection = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Empowering Cloud Optimization with AI Agents</h1>
        <p>Smart tools to help you reduce costs, manage resources, and scale efficiently.</p>
        <div className="hero-buttons">
  <button className="primary-btn cta-btn">Get Started</button>
  <button className="secondary-btn cta-btn">Learn More</button>
</div>
      </div>
      <div className="hero-animation">
        <Lottie options={lottieOptions} height={300} width={300} />
      </div>
    </section>
  );
};

export default HeroSection;
