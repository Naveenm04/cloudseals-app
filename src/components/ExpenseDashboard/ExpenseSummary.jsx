import React from 'react';

const ExpenseSummary = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  return (
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      <div style={{ background: '#e6f4ea', padding: '1rem', borderRadius: '6px' }}>
        <div>Total expenses for selected period</div>
        <h2 style={{ color: 'green' }}>${(total / 1000).toFixed(3)}k</h2>
      </div>
      <div style={{ background: '#f0f4f8', padding: '1rem', borderRadius: '6px' }}>
        <div>Total expenses for previous period</div>
        <h2 style={{ color: '#004b8d' }}>$50.474k</h2>
      </div>
    </div>
  );
};

export default ExpenseSummary;
