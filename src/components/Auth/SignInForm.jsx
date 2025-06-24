import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import SocialSignIn from './SocialSignIn';
import './Auth.css';
import logo from '../../assets/logo.png';

const SignInForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulate login logic (replace with real auth)
    const validLogin = true;

    if (validLogin) {
      setSuccess('Login successful!');
      setError('');
      setTimeout(() => navigate('/dashboard-overview'), 1000);
    } else {
      setError('Invalid email or password');
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="Logo" className="auth-logo" />
      <form className="auth-form" onSubmit={handleSignIn}>
        <input type="email" placeholder="Business email (login) *" required />
        <PasswordInput placeholder="Password" />

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <button type="submit" className="auth-button">SIGN IN</button>

        <p className="switch-auth">
          Don’t have an account? <a href="/signup">Register</a>
        </p>
      </form>

      <SocialSignIn />
    </div>
  );
};

export default SignInForm;
