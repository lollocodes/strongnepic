// LandingPage.tsx
import React, { useEffect } from 'react';
import { GymClass } from '../types/GymClass';
import { useNavigate } from 'react-router';
import { User } from '../types/User';

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long'};
  const date = new Date(dateString);
  return date.toLocaleDateString('sv', options);
};


type LandingPageProps = {
  classes: GymClass[];
  user: User;
  bookClass: (selectedClass: GymClass, user: User) => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ user, classes, bookClass }) => {
  const navigate = useNavigate()

  return (
    <ul>
      <h2>Dina bokade klasser</h2>
      {user.bookedClasses.map((cls) => (
        <li key={cls.id}>
          <p>
            <span>{formatDate(cls.date)}</span>
            <span>{cls.time}</span>
            {cls.name}
            <button>Avboka</button>
          </p>
        </li>
      ))}
      <h2>Kommande pass</h2>
      {classes.map((cls) => (
        <li key={cls.id}>
          <p>
            <span>{formatDate(cls.date)}</span>
            <span>{cls.time}</span>
            {cls.name}
            <button onClick={() => bookClass(cls, user)}>Boka</button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LandingPage;
