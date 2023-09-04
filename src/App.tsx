import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ClassListPage from './components/ClassListPage';
import UserBookingPage from './components/UserBookingPage';
import AdminPage from './components/AdminPage';
import LoginPage from './components/Login';

function App() {
  return (
<Router>
      <div>
        <h1>Strong n epic</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/classes" element={<ClassListPage />} />
          <Route path="/bookings" element={<UserBookingPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
