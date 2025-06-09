import React from 'react';
import ActionsMenu from './ActionsMenu';

const ResourceTable = ({ data }) => {
  return (
    <table className="w-full mt-4 border-t border-gray-300 text-sm">
      <thead>
        <tr className="text-left text-gray-700 bg-gray-100">
          <th className="p-2">Name</th>
          <th className="p-2">Limit</th>
          <th className="p-2">Expenses this month</th>
          <th className="p-2">Forecast this month</th>
          <th className="p-2">Owner</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-t">
            <td className="p-2 flex items-center gap-2">
              <span className="text-xl">▶️</span>
              <span className="font-medium">{row.name}</span>
            </td>
            <td className="p-2">{row.limit}</td>
            <td className="p-2 text-green-700 font-semibold">${row.expenses.toLocaleString()}</td>
            <td className="p-2">${row.forecast.toLocaleString()}</td>
            <td className="p-2">{row.owner}</td>
            <td className="p-2">
              <ActionsMenu />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResourceTable;
