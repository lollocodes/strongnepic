import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { User } from '../types/User';

type LoginProps = {
  onLogin: (user: User) => void; // Callback function to handle successful login
};

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    // Kolla om användaren redan är inloggad -> navigera till landningssidan
    if (localStorage.getItem("current user")) {
     navigate("/")
    }
   }, []);

  const handleLogin = (e: React.FormEvent) => { 
    e.preventDefault();

    if (username === 'admin') {
      const user: User = {
        id: 1,
        username: username,
        password: password,
        role: "ADMIN",
        bookedClasses: []
      };
      onLogin(user);
      navigate("/admin")
    } else {
      const user: User = {
        id: 1,
        username: username,
        password: password,
        role: "USER",
        "bookedClasses": [
          {
            "id": 1,
            "name": "Kettlebell",
            "capacity": 20,
            "booked": 5,
            "date": "2023-09-10",
            "time": "18:00",
            "duration": 60
          },
          {
            "id": 3,
            "name": "FYS",
            "capacity": 10,
            "booked": 8,
            "date": "2023-09-15",
            "time": "18:00",
            "duration": 55
          }
        ]
      };
      onLogin(user);
      navigate("/")
    }

    //Spara användarnamn i localstorage
    localStorage.setItem(
      "current user",
      JSON.stringify(username)
    );
    
  }


  return (
    <div>
      <h1>Strong n Epic</h1>

      <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username" ></label>
        <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" id='username' placeholder='Användarnamn'  />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder='Lösenord' />
      </div>
      <button type='submit' className='submitBtn'>Logga in</button>
    </form>      
    </div>
  );
};

export default LoginPage;
