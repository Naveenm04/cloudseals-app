import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import SocialSignIn from './SocialSignIn';
import './Auth.css';
import logo from '../../assets/logo.png';

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add validation here if needed
    navigate('/dashboard-overview'); // ✅ updated route to /dashboard instead of /home
  };

  return (
    <>
      {/* <Header /> Removed since Header.jsx is deleted */}
      <div className="auth-container">
        <img src={logo} alt="Logo" className="auth-logo" />
        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Business email (login) *"
            required
          />
          <input type="text" placeholder="Full name *" required />
          <PasswordInput placeholder="Password" />
          <PasswordInput placeholder="Confirm password" />
          <p className="note">No credit card required. 30 seconds to sign up.</p>
          <button type="submit" className="auth-button">REGISTER</button>
          <p className="policy-text">
            By registering you agree to Cloudseals’s <a href="/">privacy policy</a>.
          </p>
          <p className="switch-auth">
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </form>
        <SocialSignIn />
        {/* <SignUpHero /> Uncomment if needed later */}
      </div>
    </>
  );
};

export default SignUpForm;
