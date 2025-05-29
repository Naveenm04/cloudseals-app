import React, { useState } from 'react';

const PasswordInput = ({ placeholder }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-input-wrapper">
      <input
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        required
      />
      <button
        type="button"
        className="toggle-password"
        onClick={() => setVisible(!visible)}
      >
        👁️
      </button>
    </div>
  );
};

export default PasswordInput;
