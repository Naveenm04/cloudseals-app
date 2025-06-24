import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import SocialSignIn from './SocialSignIn';
import './Auth.css';
import logo from '../../assets/logo.png';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration logic
    const isValid = true; // replace with actual validation

    if (isValid) {
      setSuccess('Successfully registered!');
      setError('');
      setTimeout(() => navigate('/dashboard-overview'), 1000);
    } else {
      setError('Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="Logo" className="auth-logo" />
      <form className="auth-form" onSubmit={handleRegister}>
        <input type="email" placeholder="Business email (login) *" required />
        <input type="text" placeholder="Full name *" required />
        <PasswordInput placeholder="Password" />
        <PasswordInput placeholder="Confirm password" />

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <p className="note">No credit card required. 30 seconds to sign up.</p>
        <button type="submit" className="auth-button">REGISTER</button>
        <p className="policy-text">
          By registering you agree to CloudSeals’s <a href="/">privacy policy</a>.
        </p>
        <p className="switch-auth">
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </form>
      <SocialSignIn />
    </div>
  );
};

export default SignUpForm;
