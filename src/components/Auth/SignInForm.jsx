import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import SocialSignIn from './SocialSignIn';
import './Auth.css';
import logo from '../../assets/logo.png'; //Logo import

const SignInForm = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    navigate('/dashboard-overview'); //redirecting to '/dashboard'
  };

  return (
    <>
      {/* <Header /> Removed since Header is deleted */}
      <div className="auth-container">
        <img src={logo} alt="Logo" className="auth-logo" />
        <form className="auth-form" onSubmit={handleSignIn}>
          <input type="email" placeholder="Business email (login) *" required />
          <PasswordInput placeholder="Password" />
          <button type="submit" className="auth-button">SIGN IN</button>
          <p className="switch-auth">
            Don’t have an account? <a href="/signup">Register</a>
          </p>
        </form>
        <SocialSignIn />
      </div>
    </>
  );
};

export default SignInForm;
