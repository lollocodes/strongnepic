import React from 'react';
import { GymClass } from '../types/GymClass';
import { getUserById } from '../services/userService';
import { formatDate } from '../utils/utils';

type GymClassTableProps = {
  classes: GymClass[];
  onDeleteClass: (classId: number) => void;
};

const GymClassTable: React.FC<GymClassTableProps> = ({ classes, onDeleteClass }) => {
  return (
    <table>
      <thead>
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
                  <li key={user?.id}>{user?.email}</li>
                );
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
  );
};

export default GymClassTable;
