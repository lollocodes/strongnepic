import React from 'react';
import { GymClass } from '../types/GymClass';
import { User } from '../types/User';
import { getClassById } from '../services/userService';
import { formatDate } from '../utils/utils';

type BookedClassesTableProps = {
  user: User;
  unBookClass: (selectedClass: GymClass, user: User) => void;
};

const BookedClassesTable: React.FC<BookedClassesTableProps> = ({ user,  unBookClass }) => {
  return (
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
      <tbody className="bookList">
        {user.bookedClasses?.map((id) => {
          const cls = getClassById(id);
          return (
            <tr key={cls?.id}>
              <td>{cls?.date ? formatDate(cls.date) : ''}</td>
              <td>{cls?.time}</td>
              <td>{cls?.name}</td>
              <td>
                <button onClick={() => unBookClass(cls as GymClass, user as User)} className="cancelBtn">
                  Avboka
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BookedClassesTable;
