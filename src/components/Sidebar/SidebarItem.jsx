// src/components/Sidebar/SidebarItem.jsx
import React, { useState } from 'react';

const SidebarItem = ({ title, subItems = [] }) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = subItems.length > 0;

  return (
    <div className="sidebar-item">
      <div className="sidebar-title" onClick={() => hasSubItems && setOpen(!open)}>
        {title}
        {hasSubItems && <span className="dropdown-arrow">{open ? '▾' : '▸'}</span>}
      </div>
      {open && hasSubItems && (
        <ul className="sidebar-subitems">
          {subItems.map((sub, idx) => (
            <li key={idx} className="sidebar-subitem">{sub}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
