// src/pages/MainHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/Hero/HeroSection';
import FeaturesSection from '../components/Features/FeaturesSection';
import TrustBar from '../components/TrustBar/TrustBar';
import Footer from '../components/Footer/Footer';
import '../styles/MainHome.css';

const MainHome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar /> {/* Top navigation menu */}
      <HeroSection /> {/* Eye-catching hero section */}
      <FeaturesSection /> {/* Product highlights feature cards */}
      <TrustBar />
      <Footer />

      {/* <div className="main-home-wrapper" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to CloudSeals</h1>
        <p>Optimize your cloud resources and costs using AI-driven insights.</p>

        <div style={{ marginTop: '2rem' }}>
          <button
            style={{
              margin: '0 1rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '8px',
              backgroundColor: '#2563eb',
              color: '#fff',
              border: 'none',
            }}
            onClick={() => navigate('/signup')}
          >
            Register
          </button>

          <button
            style={{
              margin: '0 1rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '8px',
              backgroundColor: '#10b981',
              color: '#fff',
              border: 'none',
            }}
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default MainHome;
