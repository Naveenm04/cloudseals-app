import React from 'react';
import { FaPlus, FaList, FaChartBar, FaTrash } from 'react-icons/fa';

const ActionsMenu = () => {
  return (
    <div className="flex gap-4 text-gray-700 text-lg">
      <FaPlus title="Add" />
      <FaList title="List" />
      <FaChartBar title="Graph" />
      <FaTrash title="Delete" />
    </div>
  );
};

export default ActionsMenu;
