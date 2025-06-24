// src/components/Auth/SSOButtons.jsx
import React from 'react';
import './SSOButtons.css';

const SSOButtons = () => {
  const handleGoogleSignIn = () => {
    // TODO: Integrate real Google OAuth flow
    alert('Google SSO not implemented yet');
  };

  const handleMicrosoftSignIn = () => {
    // TODO: Integrate real Microsoft OAuth flow
    alert('Microsoft SSO not implemented yet');
  };

  return (
    <div className="sso-buttons-container">
      <p className="sso-label">Or sign in with:</p>
      <div className="sso-buttons">
        <button className="sso-btn google" onClick={handleGoogleSignIn}>
          <img src="/assets/logos/google-logo.svg" alt="Google" /> Google
        </button>
        <button className="sso-btn microsoft" onClick={handleMicrosoftSignIn}>
          <img src="/assets/logos/microsoft-logo.svg" alt="Microsoft" /> Microsoft
        </button>
      </div>
    </div>
  );
};

export default SSOButtons;
