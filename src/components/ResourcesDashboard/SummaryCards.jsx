import React from 'react';

const cards = [
  { label: 'Total expenses', value: '$0' },
  { label: 'Resource count', value: '554' },
  { label: 'Possible monthly savings', value: '$90.444k' }
];

const SummaryCards = () => {
  return (
    <div className="summary-cards">
      {cards.map((card, i) => (
        <div key={i} className="summary-card">
          <span className="label">{card.label}</span>
          <span className="value">{card.value}</span>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
