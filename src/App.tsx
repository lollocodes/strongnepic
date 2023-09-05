import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import UserBookingPage from './components/UserBookingPage';
import AdminPage from './components/AdminPage';
import LoginPage from './components/Login';
import { User } from './types/User';
import Banner from './components/Banner';
import { Booking } from './types/Booking';
import { GymClass } from './types/GymClass';
import './App.css';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [classes, setClasses] = useState<GymClass[]>([]);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.classes) {
          setClasses(data.classes);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  }

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  const bookClass = (selectedClass: GymClass, user: User) => {
    console.log(user)
    console.log(selectedClass)
    if (selectedClass.bookedUsers.length < selectedClass.capacity ) {
      selectedClass.bookedUsers.push(user);
    }
  }

  return (
    <Router>
      <div>
      {!user ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          <>
            <Banner onLogout={handleLogout} user={user} />
            <Routes>
              <Route path="/" element={<LandingPage bookClass={bookClass} user={user} classes={classes} />} />
              <Route path="/book" element={<UserBookingPage user={user} />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
