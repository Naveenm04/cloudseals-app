// src/pages/Resources.jsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/MainHome.css'; // reuse the styling

const Resources = () => {
  return (
    <div className="main-home-wrapper">
      <Navbar />
      <section className="main-home-hero">
        <h1>Resources</h1>
        <p>Explore whitepapers, documentation, guides, and helpful articles related to CloudSeals products and solutions.</p>
      </section>

      <section className="main-home-features">
        <div className="feature-card">
          <h3>Documentation</h3>
          <p>Get started with setup guides, deployment instructions, and best practices.</p>
        </div>
        <div className="feature-card">
          <h3>Whitepapers</h3>
          <p>Dive into our latest research and in-depth tech strategies.</p>
        </div>
        <div className="feature-card">
          <h3>Tutorials</h3>
          <p>Step-by-step video and article tutorials to help you use CloudSeals effectively.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
