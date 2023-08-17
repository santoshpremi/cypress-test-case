import React from 'react';

interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
