// LandingPage.tsx
import React, { useEffect } from 'react';
import { GymClass } from '../types/GymClass';
import { useNavigate } from 'react-router';
import { User } from '../types/User';
import { getClassById } from '../services/userService';

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
    if (user.bookedClasses?.some((bookedClass) => bookedClass === selectedClass.id )) {
      alert("Du har redan bokat detta pass")
      return
    } else if (selectedClass.bookedUsers.length < selectedClass.capacity ) {
      // Add user to the class bookedUsers
      selectedClass.bookedUsers.push(user.id);
      // Decrease class capacity 
      selectedClass.capacity -= 1;
      // Add class to users bookedClasses
      user.bookedClasses?.push(selectedClass.id)
      // Update user state
      setUser({...user});
    } else {
      alert("Class is fully booked")
    }
  }

  const unBookClass = (selectedClass: GymClass, user: User) => {

    console.log(user.bookedClasses)
    console.log(selectedClass.bookedUsers)

    const index = user.bookedClasses.findIndex((bookedClass) => bookedClass === selectedClass.id);
    if (index !== -1) {
      // remove class from users bookedClasses
      user.bookedClasses.splice(index, 1);
      // Remove user from class bookedUsers
      selectedClass.bookedUsers.splice(index, 1);
      // Increase class capacity
      selectedClass.capacity += 1;
      // Update user state
      setUser({ ...user });
    }
  };

  useEffect(() => {
    // Check if user role is ADMIN or USER and redirect
    if (user?.role === "ADMIN") {
      navigate('/admin');
    } else if (user?.role === "USER") {
      navigate('/');
    }
  }, [user]);
  

  return (
    <>
      <table>
        <thead>
        <tr>
            <th>Dina bokade pass</th>
          </tr>
          <tr>
            <th>Datum</th>
            <th>Tid</th>
            <th>Namn</th>
            <th>Åtgärder</th>
          </tr>
        </thead>
        <tbody className='bookList'>
          {user.bookedClasses?.map((id) => {
            const cls = getClassById(id)
            return (
              <tr key={cls?.id}>
              <td>{cls?.date ? formatDate(cls.date) : ''}</td>
              <td>{cls?.time}</td>
              <td>{cls?.name}</td>
              <td>
              <button onClick={() => unBookClass(cls as GymClass, user as User)} className='cancelBtn'>
                Avboka
              </button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Kommande pass</th>
          </tr>
          <tr>
            <th>Datum</th>
            <th>Tid</th>
            <th>Namn</th>
            <th>Bokade platser</th>
            <th>Åtgärder</th>
          </tr>
        </thead>
        <tbody className='bookList'>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td>{formatDate(cls.date)}</td>
              <td>{cls.time}</td>
              <td>{cls.name}</td>
              <td>
                {cls.bookedUsers.length} / {cls.capacity}
              </td>
              <td>
                <button onClick={() => bookClass(cls, user as User)} className='bookBtn'>
                  Boka
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LandingPage;
