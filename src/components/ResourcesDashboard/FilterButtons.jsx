import React, { useState } from 'react';

const filters = [
  'SUGGESTIONS',
  'DATA SOURCE (ANY)',
  'POOL (ANY)',
  'OWNER (ANY)',
  'REGION (ANY)',
  'SERVICE (ANY)',
  'RESOURCE TYPE (ANY)',
  'ACTIVITY (ANY)',
  'RECOMMENDATIONS (ANY)',
  'CONSTRAINT VIOLATIONS (ANY)',
  'FIRST SEEN (ANY)',
  'LAST SEEN (ANY)'
];

// Generate dummy dropdown data for each filter
const dropdownOptions = filters.reduce((acc, filter) => {
  acc[filter] = [
    `${filter} - Option 1`,
    `${filter} - Option 2`,
    `${filter} - Option 3`
  ];
  return acc;
}, {});

const FilterButtons = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const handleClick = (filter) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
    console.log('Selected filter:', filter);
  };

  return (
    <div className="filter-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative' }}>
      {filters.map((text, index) => (
        <div
          key={index}
          style={{ position: 'relative' }}
          onMouseEnter={() => setHoveredFilter(text)}
          onMouseLeave={() => setHoveredFilter(null)}
        >
          <button
            className={`filter-button ${selectedFilter === text ? 'active' : ''}`}
            onClick={() => handleClick(text)}
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: selectedFilter === text ? '2px solid #007bff' : '1px solid #ccc',
              background: selectedFilter === text ? '#e6f0ff' : '#fff',
              cursor: 'pointer'
            }}
          >
            {text}
          </button>

          {/* Show dropdown for all filters */}
          {hoveredFilter === text && dropdownOptions[text] && (
            <div
              className="dropdown"
              style={{
                position: 'absolute',
                top: '110%',
                left: 0,
                background: '#fff',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                zIndex: 1000,
                minWidth: '180px'
              }}
            >
              {dropdownOptions[text].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    borderBottom: i !== dropdownOptions[text].length - 1 ? '1px solid #eee' : 'none'
                  }}
                  onClick={() => {
                    alert(`You selected "${item}" from "${text}"`);
                    setSelectedFilter(text);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button
        className="show-more-button"
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          background: '#f9f9f9',
          cursor: 'pointer'
        }}
        onClick={() => alert('Show more filters coming soon!')}
      >
        SHOW MORE ⌄
      </button>
    </div>
  );
};

export default FilterButtons;
