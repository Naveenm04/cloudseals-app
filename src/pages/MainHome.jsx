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
    <div className="main-home-wrapper">
      <Navbar />
      <HeroSection />
      {/* 🔽 Add ID for scroll-to-anchor functionality */}
      <div id="">
        <FeaturesSection />
      </div>
      <TrustBar />
      <Footer />
    </div>
  );
};

export default MainHome;
