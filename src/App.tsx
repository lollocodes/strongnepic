import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/pages/BookingPage';
import AdminPage from './components/pages/AdminPage';
import LoginPage from './components/pages/LandingPage';
import { User } from './types/User';
import Banner from './components/Banner';
import { Booking } from './types/Booking';
import { GymClass } from './types/GymClass';
import './App.css';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [classes, setClasses] = useState<GymClass[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  
  const mockUsers: User[] = [
    {
      id: 1,
      email: "anna@epost.com",
      password: "123",
      role: "USER",
      bookedClasses: []
    },
    {
      id: 2,
      email: "kalle@epost.com",
      password: "123",
      role: "USER",
      bookedClasses: [1, 2]
    },
    {
      id: 3,
      email: "admin",
      password: "123",
      role: "ADMIN",
      bookedClasses: []
    }
  ];

  const mockClasses: GymClass[] = [
    {
      id: 1,
      name: "Kettlebell",
      capacity: 20,
      booked: 5,
      date: "2023-09-10",
      starttime: "18:00",
      endtime: "19:00",
      bookedUsers: [2]
    },
    {
      id: 2,
      name: "Padel",
      capacity: 15,
      booked: 10,
      date: "2023-09-12",
      starttime: "18:00",
      endtime: "19:00",
      bookedUsers: [2]
    },
    {
      id: 3,
      name: "FYS",
      capacity: 10,
      booked: 8,
      date: "2023-09-15",
      starttime: "18:00",
      endtime: "19:00",
      bookedUsers: []
    }
  ];
  
  useEffect(() => {
    // fetch('/mockData.json')
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     if (data.classes && data.users) {
    //       setClasses(data.classes);
    //       setUsers(data.users);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
      // You can use the mock data here if needed.
      setUsers(mockUsers);
      setClasses(mockClasses);
  }, []);
  

  const addBooking = (booking: Booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <Router>
      <div>
        {!user ? (
          <LoginPage users={users} onLogin={handleLogin} />
        ) : (
          <>
            <Banner onLogout={handleLogout} user={user} />
            <Routes>
              <Route path="/" element={<LandingPage setUser={setUser} user={user} classes={classes} />} />
              <Route path="/admin" element={<AdminPage setClasses={setClasses} users={users} classes={classes} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
