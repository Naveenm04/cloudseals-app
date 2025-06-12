import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import SocialSignIn from './SocialSignIn';
import './Auth.css';
import Header from '../Header'; // This will now work if Header.jsx is fixed
import logo from '../../assets/logo.png';

const SignInForm = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    navigate('/home'); // Redirect after sign in
  };

  return (
    <>
      <Header />
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
