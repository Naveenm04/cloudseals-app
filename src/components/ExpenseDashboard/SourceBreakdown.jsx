import React, { useState } from 'react';
import './SourceBreakdown.css';
import PoolSummary from '../ExpenseDashboard/PoolSummary';
import SourceSummary from './SourceSummary';

const SourceBreakdown = () => {
  const [view, setView] = useState('source'); // 'source' | 'pool'

  return (
    <div className="source-breakdown">
      <div className="header">
        <h3>Breakdown</h3>
        <div className="toggle-buttons">
          <button
            className={view === 'source' ? 'active' : ''}
            onClick={() => setView('source')}
          >
            Source
          </button>
          <button
            className={view === 'pool' ? 'active' : ''}
            onClick={() => setView('pool')}
          >
            Pools
          </button>
        </div>
      </div>

      {view === 'source' ? <SourceSummary /> : <PoolSummary />}
    </div>
  );
};

export default SourceBreakdown;
