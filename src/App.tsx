import React, { useState } from 'react';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (email: string) => {
    setUsername(email.split('@')[0]);
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <Dashboard username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
