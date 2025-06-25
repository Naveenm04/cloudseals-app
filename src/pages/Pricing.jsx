import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/MainHome.css'; // Reuse existing styles

const Pricing = () => {
  return (
    <div className="main-home-wrapper">
      <Navbar />

      <section className="main-home-hero">
        <h1>Pricing Plans</h1>
        <p>Choose the plan that best fits your business needs. Simple pricing with no hidden fees.</p>
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>

          {/* Free Plan */}
          <div className="feature-card" style={{ maxWidth: '300px' }}>
            <h3>Free</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>₹0/month</p>
            <ul style={listStyle}>
              <li>1 User</li>
              <li>Basic Monitoring</li>
              <li>Community Support</li>
            </ul>
            <button className="btn-primary" style={{ marginTop: '1rem' }}>Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="feature-card" style={{ maxWidth: '300px' }}>
            <h3>Pro</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>₹999/month</p>
            <ul style={listStyle}>
              <li>Up to 10 Users</li>
              <li>Advanced Insights</li>
              <li>Email Support</li>
            </ul>
            <button className="btn-secondary" style={{ marginTop: '1rem' }}>Try Pro</button>
          </div>

          {/* Enterprise Plan */}
          <div className="feature-card" style={{ maxWidth: '300px' }}>
            <h3>Enterprise</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Custom</p>
            <ul style={listStyle}>
              <li>Unlimited Users</li>
              <li>Priority Support</li>
              <li>Dedicated Manager</li>
            </ul>
            <button className="btn-accent" style={{ marginTop: '1rem' }}>Contact Sales</button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: '1rem 0',
  lineHeight: '1.75rem',
  color: '#4b5563'
};

export default Pricing;
