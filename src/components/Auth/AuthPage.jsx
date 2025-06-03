import React, { useState } from 'react';
import Header from '../Header';
import SignUpForm from './SignUpForm';
import '../../styles/Auth.css'; // Assuming styles moved here

const AuthPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleRegisterClick = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <>
      <Header onRegisterClick={handleRegisterClick} />
      {showSignUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseSignUp}>×</button>
            <SignUpForm />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
