import React, { useState } from 'react';
import styles from './ExpensesChart.module.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import CustomDropdown from './CustomDropdown'; // ✅ Custom dropdown component

const data = [
  {
    date: '06/01/25',
    AmazonEC2: 5319,
    ComputeEngine: 2045,
    microsoftCompute: 1857,
    AmazonS3: 1514,
    NotSet: 1268,
    ElasticCompute: 1239,
    AmazonVPC: 455.09,
    AmazonCloudWatch: 398.38,
    microsoftNetwork: 361.4,
    microsoftStorage: 265.31,
    Other: 582.55
  },
  {
    date: '06/02/25',
    AmazonEC2: 5319,
    ComputeEngine: 2045,
    microsoftCompute: 1857,
    AmazonS3: 1514,
    NotSet: 1268,
    ElasticCompute: 1239,
    AmazonVPC: 455.09,
    AmazonCloudWatch: 398.38,
    microsoftNetwork: 361.4,
    microsoftStorage: 265.31,
    Other: 582.55
  },
  {
    date: '06/03/25',
    AmazonEC2: 4719,
    ComputeEngine: 1900,
    microsoftCompute: 1600,
    AmazonS3: 1400,
    NotSet: 1180,
    ElasticCompute: 1100,
    AmazonVPC: 400,
    AmazonCloudWatch: 390,
    microsoftNetwork: 300,
    microsoftStorage: 250,
    Other: 500
  }
];

const COLORS = [
  '#4DB3FF', '#FFC43D', '#2DE1FC', '#8F32D0', '#E44151',
  '#6C63FF', '#26A96C', '#B79CED', '#606B7D', '#00A6ED', '#D66BA0'
];

const keys = [
  'AmazonEC2', 'ComputeEngine', 'microsoftCompute', 'AmazonS3', 'NotSet',
  'ElasticCompute', 'AmazonVPC', 'AmazonCloudWatch', 'microsoftNetwork',
  'microsoftStorage', 'Other'
];

const categoryOptions = [
  'Service', 'Region', 'Resource type', 'Data source', 'Owner',
  'Pool', 'K8s node', 'K8s namespace', 'K8s service'
];

const frequencyOptions = ['Daily', 'Monthly'];

const ExpensesChart = () => {
  const [showLegend, setShowLegend] = useState(true);
  const [category, setCategory] = useState('Service');
  const [frequency, setFrequency] = useState('Daily');

  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <div className={styles.controls}>
          <CustomDropdown
            label="Categorize by"
            options={categoryOptions}
            selected={category}
            onSelect={setCategory}
          />
          <CustomDropdown
            label="View by"
            options={frequencyOptions}
            selected={frequency}
            onSelect={setFrequency}
          />
        </div>

        <div className={styles.legendToggle}>
          <label htmlFor="showLegend">
            <input
              id="showLegend"
              type="checkbox"
              checked={showLegend}
              onChange={() => setShowLegend(!showLegend)}
              style={{ marginRight: '8px' }}
            />
            Show legend
          </label>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} stackOffset="expand">
          <XAxis dataKey="date" />
          <YAxis tickFormatter={val => `$${(val * 10000).toFixed(0) / 1000}k`} />
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          {showLegend && <Legend />}
          {keys.map((key, index) => (
            <Bar key={key} dataKey={key} stackId="a" fill={COLORS[index % COLORS.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>

      {showLegend && (
        <div className={styles.legend}>
          {keys.map((key, index) => (
            <div key={key} className={styles.legendItem}>
              <div className={styles.colorBox} style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <span>{key}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpensesChart;
