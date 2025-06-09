// src/components/ResourceTable/Pagination.jsx
import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="pagination">
      {pages.map(num => (
        <button
          key={num}
          className={num === currentPage ? 'active' : ''}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;