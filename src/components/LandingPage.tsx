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
  setUser: (user: User) => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ user, classes, setUser }) => {
  const navigate = useNavigate()

  const bookClass = (selectedClass: GymClass, user: User) => {
    // Check if the user have already booked the class
    if (user.bookedClasses.some((bookedClass) => bookedClass.id === selectedClass.id )) {
      alert("Du har redan bokat detta pass")
      return
    } else if (selectedClass.bookedUsers.length < selectedClass.capacity ) {
      // Add user to the class bookedUsers
      selectedClass.bookedUsers.push(user);
      // Decrease class capacity 
      selectedClass.capacity -= 1;
      // Add class to users bookedClasses
      user.bookedClasses.push(selectedClass)
      // Update user state
      setUser({...user});
    } else {
      alert("Class is fully booked")
    }
  }

  const unBookClass = (selectedClass: GymClass, user: User) => {
    // get selected class index
    const index = user.bookedClasses.findIndex((bookedClass) => bookedClass.id === selectedClass.id)
    // remove class from users bookedClasses
    user.bookedClasses.splice(index, 1)
    // Remove user from class bookedUsers
    selectedClass.bookedUsers.splice(index, 1)
    // Increase class capacity
    selectedClass.capacity += 1
    // Update user state
    setUser({...user});
  }

  return (
    <ul>
      <h2>Dina bokade pass</h2>
      {user.bookedClasses.map((cls) => (
        <li className='bookList' key={cls.id}>
          <p>
            <span>{formatDate(cls.date)}</span>
            <span>{cls.time}</span>
            {cls.name}
            <button onClick={() => unBookClass(cls, user)} className='cancelBtn'>Avboka</button>
          </p>
        </li>
      ))}
      <h2>Kommande pass</h2>
      {classes.map((cls) => (
        <li className='bookList' key={cls.id}>
          <p>
            <span>{formatDate(cls.date)}</span>
            <span>{cls.time}</span>
            {cls.name}
            <span>{cls.bookedUsers.length} / {cls.capacity}</span>
            <button className='bookBtn' onClick={() => bookClass(cls, user)}>Boka</button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LandingPage;
