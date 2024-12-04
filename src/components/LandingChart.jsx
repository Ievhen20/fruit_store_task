import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample dynamic data, which can be fetched from an API or generated
const fetchData = () => {
  // Simulating fetching dynamic data, could be replaced with API call
  return [
    { name: 'Jan', earnings: 4000, expenditure: 2400 },
    { name: 'Feb', earnings: 3000, expenditure: 1398 },
    { name: 'Mar', earnings: 2000, expenditure: 9800 },
    { name: 'Apr', earnings: 2780, expenditure: 3908 },
    { name: 'May', earnings: 1890, expenditure: 4800 },
    { name: 'Jun', earnings: 2390, expenditure: 3800 },
    { name: 'Jul', earnings: 3490, expenditure: 4300 },
  ];
};

function LandingChart() {
  const [data, setData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchedData = fetchData(); // Simulate data fetching
    setData(fetchedData); // Set the fetched data
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Earnings Overview', // Chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months', // X-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: 'Earnings (USD)', // Y-axis label with unit
        },
        beginAtZero: true, // Y-axis starts at 0
      },
    },
  };

  return (

    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Shop Financial Expenditure vs. Imports
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} options={options}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="earnings" fill="#8884d8" name="Earnings" />
          <Bar dataKey="expenditure" fill="#82ca9d" name="Expenditure" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>

  );
}

export default LandingChart;
