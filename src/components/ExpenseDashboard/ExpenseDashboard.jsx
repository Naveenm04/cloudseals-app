import React, { useState } from 'react';
import './ExpenseDashboard.css';
import ExpenseSummary from './ExpenseSummary';
import ExpenseChart from './ExpenseChart';
import ExpenseBreakdown from './ExpenseBreakdown';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import data from './expenseData';
import PoolSummary from './PoolSummary';


const ExpenseDashboard = () => {
  const [view, setView] = useState('Daily');
  const [dateRange, setDateRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setShowCalendar(false);
  };

  const currentData = data[view.toLowerCase()];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Expenses of Sunflower Inc</h2>
        <div className="dashboard-controls">
          <button className="download-btn">📄 DOWNLOAD</button>
          <div className="date-range">
            <label>Date range (UTC)</label>
            <div
              className="date-input"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {`${format(dateRange[0].startDate, 'MMM dd')} - ${format(
                dateRange[0].endDate,
                'MMM dd'
              )}`}
              📅
            </div>
            {showCalendar && (
              <div className="calendar-popup">
                <DateRange
                  editableDateInputs={true}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard-tabs">
        {['Daily', 'Weekly', 'Monthly'].map((label) => (
          <button
            key={label}
            className={view === label ? 'active' : ''}
            onClick={() => setView(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="dashboard-container">
        <ExpenseSummary data={currentData} />
        <ExpenseChart data={currentData} />
        <ExpenseBreakdown />
        <PoolSummary/>
      </div>
    </div>
  );
};

export default ExpenseDashboard;
