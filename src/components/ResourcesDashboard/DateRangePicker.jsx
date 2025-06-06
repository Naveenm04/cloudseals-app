import React, { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format, subDays, startOfMonth, endOfMonth } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const pickerRef = useRef(null);

  // Close picker on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePicker = () => setShowPicker((prev) => !prev);

  const formattedRange = `${format(range[0].startDate, 'MMM dd')} - ${format(range[0].endDate, 'MMM dd')}`;

  const applyQuickRange = (type) => {
    let startDate, endDate;
    const today = new Date();

    switch (type) {
      case 'this_month':
        startDate = startOfMonth(today);
        endDate = endOfMonth(today);
        break;
      case 'last_month':
        startDate = startOfMonth(subDays(today, 30));
        endDate = endOfMonth(subDays(today, 30));
        break;
      case 'last_7':
        startDate = subDays(today, 6);
        endDate = today;
        break;
      case 'last_30':
        startDate = subDays(today, 29);
        endDate = today;
        break;
      default:
        return;
    }

    setRange([{ startDate, endDate, key: 'selection' }]);
  };

  return (
    <div className="date-range-container" style={{ position: 'relative', display: 'inline-block' }}>
      <label>Date range (UTC)</label>
      <div
        onClick={togglePicker}
        className="date-display"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #ccc',
          padding: '8px 12px',
          borderRadius: '6px',
          cursor: 'pointer',
          maxWidth: '250px',
          userSelect: 'none',
        }}
      >
        <span>{formattedRange}</span>
        <span role="img" aria-label="calendar">📅</span>
      </div>

      {showPicker && (
        <div
          ref={pickerRef}
          style={{
            position: 'absolute',
            zIndex: 100,
            display: 'flex',
            background: '#fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            marginTop: '8px',
            padding: '16px'
          }}
        >
          <DateRange
            editableDateInputs
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            showDateDisplay={false}
            rangeColors={['#f97316']} // Orange-like
          />

          {/* Sidebar with shortcuts */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: '16px',
            minWidth: '160px'
          }}>
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Quick select</div>
              <button onClick={() => applyQuickRange('this_month')} style={styles.quickBtn}>This month</button>
              <button onClick={() => applyQuickRange('last_month')} style={styles.quickBtn}>Last month</button>
              <button onClick={() => applyQuickRange('last_7')} style={styles.quickBtn}>Last 7 days</button>
              <button onClick={() => applyQuickRange('last_30')} style={styles.quickBtn}>Last 30 days</button>
            </div>
            <button
              style={styles.applyBtn}
              onClick={() => setShowPicker(false)}
            >
              APPLY
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  quickBtn: {
    display: 'block',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    padding: '6px 0',
    cursor: 'pointer',
    color: '#0070c9',
    fontSize: '14px',
  },
  applyBtn: {
    marginTop: '20px',
    padding: '10px 16px',
    borderRadius: '4px',
    background: '#0070c9',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default DateRangePicker;
