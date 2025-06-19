import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DarkLightModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <span onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </span>
  );
};

export default DarkLightModeToggle;
