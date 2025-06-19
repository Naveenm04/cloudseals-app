// src/components/CostOptimization/SavingsChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './CostOptimization.css';

const data = [
  { month: 'Jan', savings: 200 },
  { month: 'Feb', savings: 300 },
  { month: 'Mar', savings: 150 },
  { month: 'Apr', savings: 400 },
  { month: 'May', savings: 350 },
];

const SavingsChart = () => {
  return (
    <div className="cost-section">
      <h2 className="section-title">Savings Visualization</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="savings" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SavingsChart;