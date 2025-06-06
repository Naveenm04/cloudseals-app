// src/components/ExpensesChart/CustomDropdown.jsx
import { ChevronDown } from 'lucide-react';

import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomDropdown.module.css';


const CustomDropdown = ({ label, options, selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <span className={styles.label}>Categorize by</span>
      <button onClick={() => setOpen(!open)} className={styles.button}>
        {selected}
        <ChevronDown size={16} />
      </button>
      {open && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li
              key={opt}
              className={`${styles.menuItem} ${opt === selected ? styles.active : ''}`}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
