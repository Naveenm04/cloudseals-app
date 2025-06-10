import React from 'react';

const ExpenseBreakdown = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p>See expenses breakdown by</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button>📡 SOURCE</button>
        <button>🏢 POOL</button>
        <button>👥 OWNER</button>
        <button>🌐 GEOGRAPHY</button>
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
