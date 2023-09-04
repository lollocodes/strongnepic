import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserBookingPage from './components/UserBookingPage';
import AdminPage from './components/AdminPage';
import LoginPage from './components/Login';

import { User } from './types/User';
import Banner from './components/Banner';

function App() {
  const user: User = {id: 1, name: "Anna", lastname: "Andersson", password: "123", role: "USER"};

  return (
<Router>
      <div>
      <Banner user={user}/>

        <h1>Strong n epic</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/book" element={<UserBookingPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
