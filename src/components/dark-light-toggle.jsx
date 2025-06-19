// src/pages/DarkLightModeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './DarkLightModeToggle.css';

const DarkLightModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="plain-toggle-button">
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default DarkLightModeToggle;
