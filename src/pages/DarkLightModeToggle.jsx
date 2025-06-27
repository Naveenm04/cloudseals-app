import React from 'react';
import { useTheme } from '../context/ThemeContext'; // ✅ Correct path if both in src

const DarkLightModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <span
      onClick={toggleTheme}
      style={{ cursor: 'pointer', fontSize: '1rem' }}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </span>
  );
};

export default DarkLightModeToggle;



// ✅ FIXED VERSION OF `DarkLightModeToggle.jsx`

// import React from 'react';
// import { useTheme } from '../context/ThemeContext';
// import './DarkLightModeToggle.css';

// const DarkLightModeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <label className="toggle-switch">
//       <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
//       <span className="slider"></span>
//       <span className="label-text">{theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
//     </label>
//   );
// };

// export default DarkLightModeToggle;
