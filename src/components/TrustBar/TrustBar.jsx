import React from 'react';
import './TrustBar.css';
import logo1 from '../../assets/logos/logo1.png';
import logo2 from '../../assets/logos/logo2.png';
import logo3 from '../../assets/logos/logo3.png';
import logo4 from '../../assets/logos/logo4.png';
import logo5 from '../../assets/logos/logo5.png';
// import logo6 from '../../assets/logos/logo6.png';

const TrustBar = () => {
  return (
    <div className="trustbar-container">
      <h2 className="trustbar-title">Trusted by leading organizations</h2>

      <div className="logo-slider">
        <div className="logo-track">
          {/* Logos duplicated for infinite loop effect */}
          {[logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div className="logo-slide" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
