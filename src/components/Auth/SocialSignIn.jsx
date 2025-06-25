import React from 'react';
import './Auth.css';

const SocialSignIn = () => {
  const handleGoogleSignIn = () => {
    // TODO: Replace with real Google OAuth flow
    alert('Google SSO not implemented yet');
  };

  const handleMicrosoftSignIn = () => {
    // TODO: Replace with real Microsoft OAuth flow
    alert('Microsoft SSO not implemented yet');
  };

  return (
    <div className="social-signin">
      <p className="social-text">Or sign in with:</p>
      <div className="social-buttons">
        <button
          className="btn-social google"
          onClick={handleGoogleSignIn}
          aria-label="Sign in with Google"
        >
          <img src="/assets/logos/google-logo.svg" alt="Google" />
          Google
        </button>
        <button
          className="btn-social microsoft"
          onClick={handleMicrosoftSignIn}
          aria-label="Sign in with Microsoft"
        >
          <img src="/assets/logos/microsoft-logo.svg" alt="Microsoft" />
          Microsoft
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
