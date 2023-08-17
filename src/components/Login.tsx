import React, { useState } from 'react';

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Define type for errorMessage

  const handleLogin = () => {
    // Mock login logic (replace with actual logic)
    if (email === 'premi@example.com' && password === 'password') {
      onLogin(email);
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
