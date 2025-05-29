import React from 'react';
import PasswordInput from './PasswordInput';
import SocialSignIn from './SocialSignIn';
import './Auth.css';

const SignInForm = () => {
  return (
    <div className="auth-container">
      <img src="/assets/logo.png" alt="" className="auth-logo" />
      <form className="auth-form">
        <input type="email" placeholder="Business email (login) *" required />
        <PasswordInput placeholder="Password" />
        <button type="submit" className="auth-button">SIGN IN</button>
        <p className="switch-auth">Don't have an account? <a href="/signup">Register</a></p>
      </form>
      <SocialSignIn />
    </div>
  );
};

export default SignInForm;
