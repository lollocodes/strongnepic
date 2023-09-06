import React from 'react';
import { GymClass } from '../types/GymClass';
import { User } from '../types/User';
import { formatDate } from '../utils/utils';

type UpcomingClassesTableProps = {
  user: User;
  classes: GymClass[];
  bookClass: (selectedClass: GymClass, user: User) => void;
};

const UpcomingClassesTable: React.FC<UpcomingClassesTableProps> = ({ user, classes, bookClass }) => {
  return (
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
      <tbody className="bookList">
        {classes.map((cls) => (
          <tr key={cls.id}>
            <td>{formatDate(cls.date)}</td>
            <td>{cls.time}</td>
            <td>{cls.name}</td>
            <td>
              {cls.bookedUsers.length} / {cls.capacity}
            </td>
            <td>
              <button onClick={() => bookClass(cls, user as User)} className="bookBtn">
                Boka
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UpcomingClassesTable;