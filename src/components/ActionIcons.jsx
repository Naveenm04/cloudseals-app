import React from 'react';

const ActionIcons = () => {
  const icons = ['📖', '❓', '🎓', '👤'];
  return (
    <div className="flex gap-3 text-blue-900 text-xl">
      {icons.map((icon, idx) => (
        <span key={idx}>{icon}</span>
      ))}
    </div>
  );
};

export default ActionIcons;
