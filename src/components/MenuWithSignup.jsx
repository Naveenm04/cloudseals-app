import React, { useState } from 'react';
import SignUpForm from './Auth/SignUpForm';
import './Auth/Auth.css';

const MenuWithSignup = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="menu-page">
      {!showForm ? (
        <div className="menu-content">
          <h1>Welcome to Our App</h1>
          <button className="auth-button" onClick={() => setShowForm(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <SignUpForm />
      )}
    </div>
  );
};

export default MenuWithSignup;
