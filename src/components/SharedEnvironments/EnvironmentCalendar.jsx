import React, { useState } from 'react';
import environments from '../../data/environmentsData';
import './EnvironmentCalendar.css';

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const EnvironmentCalendar = () => {
  const [view, setView] = useState('month'); // month | week | day
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-based index
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Utility to get number of days in a given month
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  // Adjust month/year on navigation
  const handleMonthChange = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(prev => prev - 1);
      } else {
        setCurrentMonth(prev => prev - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(prev => prev + 1);
      } else {
        setCurrentMonth(prev => prev + 1);
      }
    }
  };

  // Filter environments with booking on a given date
  const getBookingsForDate = (date) => {
    return environments.filter(env =>
      env.bookings?.some(b => {
        const start = new Date(b.start);
        const end = new Date(b.end);
        return date >= start && date <= end;
      })
    );
  };

  // Month view rendering
  const renderMonthView = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
    const cells = [];

    for (let i = 0; i < totalCells; i++) {
      const day = i - firstDayOfMonth + 1;
      const date = new Date(currentYear, currentMonth, day);
      const bookings = day > 0 && day <= daysInMonth ? getBookingsForDate(date) : [];

      cells.push(
        <div key={i} className="calendar-cell">
          {day > 0 && day <= daysInMonth && (
            <>
              <span className="day-number">{String(day).padStart(2, '0')}</span>
              {bookings.map((env, idx) => (
                <div key={idx} className="calendar-event">{env.name}</div>
              ))}
            </>
          )}
        </div>
      );
    }

    return (
      <div className="calendar-grid">
        <div className="calendar-row header">
          {daysOfWeek.map(day => (
            <div key={day} className="calendar-cell header-cell">{day}</div>
          ))}
        </div>
        {Array.from({ length: totalCells / 7 }).map((_, rowIndex) => (
          <div key={rowIndex} className="calendar-row">
            {cells.slice(rowIndex * 7, rowIndex * 7 + 7)}
          </div>
        ))}
      </div>
    );
  };

  // Week View
  const renderWeekView = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    return (
      <div className="calendar-grid">
        <div className="calendar-row header">
          {daysOfWeek.map((day, i) => {
            const date = new Date(startOfWeek);
            date.setDate(date.getDate() + i);
            return (
              <div key={i} className="calendar-cell header-cell">
                {day}<br />
                {String(date.getDate()).padStart(2, '0')}
              </div>
            );
          })}
        </div>
        <div className="calendar-row">
          {Array.from({ length: 7 }).map((_, i) => {
            const date = new Date(startOfWeek);
            date.setDate(date.getDate() + i);
            const bookings = getBookingsForDate(date);

            return (
              <div key={i} className="calendar-cell">
                {bookings.map((env, idx) => (
                  <div key={idx} className="calendar-event">{env.name}</div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Day View
  const renderDayView = () => {
    const today = new Date();
    const bookings = getBookingsForDate(today);

    return (
      <div className="calendar-day-view">
        <h3>Bookings for {today.toDateString()}</h3>
        {bookings.length > 0 ? (
          bookings.map((env, idx) => (
            <div key={idx} className="calendar-event">{env.name}</div>
          ))
        ) : (
          <p>No bookings</p>
        )}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => handleMonthChange('prev')}>&lt;</button>
        <span>
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
        </span>
        <button onClick={() => handleMonthChange('next')}>&gt;</button>

        <div className="calendar-view-options">
          {['month', 'week', 'day'].map(mode => (
            <button
              key={mode}
              className={view === mode ? 'active' : ''}
              onClick={() => setView(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {view === 'month' && renderMonthView()}
      {view === 'week' && renderWeekView()}
      {view === 'day' && renderDayView()}

      <div className="env-note">
        <p>
          <strong>ℹ</strong> You can create Shared Environments for on-premise or existing cloud resources.
        </p>
      </div>
    </div>
  );
};

export default EnvironmentCalendar;
