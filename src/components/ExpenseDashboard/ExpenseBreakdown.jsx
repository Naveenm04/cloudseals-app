import React, { useState } from 'react';
import SourceBreakdown from './SourceBreakdown';

const ExpenseBreakdown = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (type) => {
    setSelected(type);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p>See expenses breakdown by</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={() => handleClick('source')}>📡 SOURCE</button>
        <button>🏢 POOL</button>
        <button>👥 OWNER</button>
        <button>🌐 GEOGRAPHY</button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {selected === 'source' && <SourceBreakdown />}
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
