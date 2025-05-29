// src/components/OrganizationBarChart.jsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

const barData = [
  { name: 'Apr', value: 151428 },
  { name: 'May', value: 106847 },
  { name: 'May (Forecast)', value: 124971 },
];

const OrganizationBarChart = () => {
  return (
    <div className="dashboard-panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Organization expenses ↗</h2>
      </div>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis tickFormatter={tick => `$${(tick / 1000).toFixed(0)}k`} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <ReferenceLine y={397500} stroke="#dc2626" strokeDasharray="5 5" />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]}>
              {
                barData.map((entry, index) => (
                  <text
                    key={index}
                    x={index * 100 + 30}
                    y={210 - entry.value / 3000}
                    fill="#000"
                    fontSize={12}
                    textAnchor="middle"
                  >
                    ${(entry.value / 1000).toFixed(3)}k
                  </text>
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="text-right text-red-600 text-sm font-semibold mt-1">$397,500</div>
      </div>
    </div>
  );
};

export default OrganizationBarChart;
