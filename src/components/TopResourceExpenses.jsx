// src/components/TopResourceExpenses.jsx
import React from 'react';

const topResources = [
  { id: 'sunflower-eu-fra', amount: 7803.34, type: 'aws' },
  { id: 'i-082b1a163698b8ede', amount: 4736.62, type: 'aws' },
  { id: 'i-0e464cfb9650bd21', amount: 2594.62, type: 'aws' },
  { id: 'sunflower-infra-backup', amount: 2556.58, type: 'aws' },
  { id: '.../aqa-westus2-underutilized-instance', amount: 2051.48, type: 'azure' },
  { id: 'i-0436ee72bb653bf8a-x1', amount: 1614.49, type: 'aws' },
];

const TopResourceExpenses = () => {
  return (
    <div className="dashboard-panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Top resource expenses for last 30 days</h2>
        <a href="#" className="text-sm text-blue-600 underline">View in Perspectives</a>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs text-gray-500 border-b">
            <th>Resource</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {topResources.map((resource, index) => (
            <tr key={index} className="hover:bg-blue-50 text-sm">
              <td className="py-2 flex items-center gap-2">
                <span className={`badge ${resource.type === 'aws' ? 'bg-gray-200 text-gray-800' : 'bg-blue-100 text-blue-800'}`}>
                  {resource.type === 'aws' ? 'aws' : 'A'}
                </span>
                <span className="truncate max-w-[180px]">{resource.id}</span>
              </td>
              <td className="py-2 text-right font-semibold text-gray-800">
                ${resource.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-sm mt-2 text-gray-600">Total: {topResources.length}</div>
    </div>
  );
};

export default TopResourceExpenses;
