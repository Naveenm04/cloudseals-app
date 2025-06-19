import React, { useState } from 'react';
import SSOButtons from './SSOButtons';

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    // mock login success
    localStorage.setItem('user', JSON.stringify({ email }));
    window.location.href = "/dashboard";
  };

  return (
    <div className="modal">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <SSOButtons />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginModal;
