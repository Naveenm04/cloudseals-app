import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {user?.name || user?.email || 'User'}!</h1>
      <p>You have successfully logged in or registered.</p>
    </div>
  );
};

export default Dashboard;
