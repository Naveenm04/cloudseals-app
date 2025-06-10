import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const ExpenseChart = ({ data }) => {
  return (
    <BarChart width={700} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#40bfff" />
    </BarChart>
  );
};

export default ExpenseChart;
