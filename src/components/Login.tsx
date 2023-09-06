import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { User } from '../types/User';
import './../App.css';

type LoginProps = {
  onLogin: (user: User) => void;
  users: User[];

};

const LoginPage: React.FC<LoginProps> = ({ onLogin, users }) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is already logged in
    const loggedInUser = localStorage.getItem('current user');

    if (loggedInUser) {
      // If a user is logged in, parse the JSON and perform the login
      const parsedUser = JSON.parse(loggedInUser);
      onLogin(parsedUser);
      // Redirect to the landing page
      navigate('/');
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Check if loggedInUser exists in mockData
    const existingUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );
    
    if (existingUser) { 
      // If the user exists in mockData, perform the login
      onLogin(existingUser as User); 
      localStorage.setItem('current user', JSON.stringify(existingUser));
      // Redirect to the landing page
      if (existingUser.role === "ADMIN") {
        navigate('/admin');
      } else if (existingUser.role === "USER") {
        navigate('/');
      }
    } else {
      // If the user is not found, display an error message or handle the authentication failure
      alert('User not found');
    }
  };

  useEffect(() => {
    // Check if a user is already logged in
    const loggedInUser = localStorage.getItem('current user');

    if (loggedInUser) {
      // If a user is logged in, parse the JSON and perform the login
      const parsedUser = JSON.parse(loggedInUser);
      onLogin(parsedUser);
    }
  }, []);
  
  
  
  
    



  return (
    <div>
      <h1>Strong n Epic</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email, password);
        }}
      >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            required
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="submitBtn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
