import React from 'react';
import { GymClass } from '../types/GymClass';
import { useNavigate } from 'react-router';
import { User } from '../types/User';
import CreateClassForm from './CreateClassForm';
import { getUserById } from '../services/userService';

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const date = new Date(dateString);
  return date.toLocaleDateString('sv', options);
};

type AdminPageProps = {
  classes: GymClass[];
  users: User[];
  setClasses: (gymClass: GymClass[]) => void; // Updated type for setClasses
};

const AdminPage: React.FC<AdminPageProps> = ({ users, classes, setClasses }) => {
  const navigate = useNavigate();

  const onDeleteClass = (classId: number) => {
    // Filter class with Id
    const updatedClasses = classes.filter((cls) => cls.id !== classId);

    // Update the state using setClasses
    setClasses(updatedClasses);
  };


  const createNewClass = (newClass: GymClass) => {
    // Add new class to existing array of classes
    setClasses([...classes, newClass]);
  };

  //get bookedUsers by id




  return (
    <div>
      <h2>Admin page</h2>
      <CreateClassForm createNewClass={createNewClass}/>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Träningspass</th>
          </tr>
          <tr>
            <th>Datum</th>
            <th>Tid</th>
            <th>Namn</th>
            <th>Tillgängliga platser</th>
            <th>Bokningar</th>
            <th>Åtgärder</th>
          </tr>
        </thead>
        <tbody>
            {classes.map((cls) => (
              <tr key={cls.id}>
                <td>{formatDate(cls.date)}</td>
                <td>{cls.time}</td>
                <td>{cls.name}</td>
                <td>
                  {cls.bookedUsers.length} / {cls.capacity}
                </td>
                <td>
                  {cls.bookedUsers.map((id) => {
                    const user = getUserById(id);
                    return (
                      <li key={user?.id}>
                        {user?.email}
                      </li>
                    )
                  })}
                </td>
                <td>
                  <button className='bookBtn' onClick={() => onDeleteClass(cls.id)}>
                    Radera
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
