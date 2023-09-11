import React, { useState } from 'react';
import { GymClass } from '../../types/GymClass';
import { useNavigate } from 'react-router';
import { User } from '../../types/User';
import CreateClassForm from '../CreateClassForm';
import UserTable from '../UserTable';
import GymClassTable from '../GymClassTable';

type AdminPageProps = {
  users: User[];
  classes: GymClass[];
  setClasses: (gymClass: GymClass[]) => void;
};

const AdminPage: React.FC<AdminPageProps> = ({ users, classes, setClasses }) => {
  const [displayUsers, setDisplayUsers] = useState<boolean>(true);

  // Function to delete a class
  const onDeleteClass = (classId: number) => {
    // Filter classes with the specified ID
    const updatedClasses = classes.filter((cls) => cls.id !== classId);

    // Update the state using setClasses
    setClasses(updatedClasses);
  };

  // Function to create a new class
  const createNewClass = (newClass: GymClass) => {
    // Add the new class to the existing array of classes
    setClasses([...classes, newClass]);
  };

  const handleUserClick = () => {
    setDisplayUsers(true);
  };

  const handleGymClassClick = () => {
    setDisplayUsers(false);
  };

  return (
    <div>
      <h1>Admin</h1>

      {/* Section for adding Gym classes */}
      <section>
        <h2>Lägg till pass</h2>
        <CreateClassForm createNewClass={createNewClass} />
      </section>

      <div className='table-menu'>
        <button className={`table-menu-btn ${displayUsers ? 'active-button' : 'inactive-button'}`}
 onClick={handleUserClick}>Användare</button>
        <button className={`table-menu-btn ${!displayUsers ? 'active-button' : 'inactive-button'}`}
 onClick={handleGymClassClick}>Pass</button>
      </div>

      {displayUsers ? <UserTable users={users} /> : <GymClassTable classes={classes} onDeleteClass={onDeleteClass} />}

      
    </div>
  );
};

export default AdminPage;
