// import React from 'react';
import React, { useEffect } from 'react';
import { GymClass } from '../types/GymClass';
import { useNavigate } from 'react-router';
import { User } from '../types/User';

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long'};
  const date = new Date(dateString);
  return date.toLocaleDateString('sv', options);
};

type AdminPageProps = {
  classes: GymClass[];
  user: User;
};

const AdminPage: React.FC <AdminPageProps> = ({ user, classes }) => {
  const navigate = useNavigate()

  //   name: string;
  //   capacity: number;
  //   date: string;
  //   time: string;
  //   duration: number;
  return (
    <div>
      <h2>Admin page</h2>
      <h3>Lägg till pass</h3>
<form>
  <input required type="text" name="name" id="name" placeholder="Typ av pass" /> 
  <input required type="number" name="capacity" id="capacity" placeholder="Max antal" /> 
  <input required type="text" name="date" id="date" placeholder="Datum"/>
  <input required type="text" name="time" id="time" placeholder="Starttid" />
  <input required type="number" name="duration" id="duration" placeholder="Passets tid"/>
{/* // ska det vara klass submitBtn som dom andra? */}
  <input type="submit" name="skicka" id="skicka" value="Spara pass" />
</form>
      <a href="#">Träningspass</a>
      <a href="#">Användare</a>
      <ul>
        <li>
            <span>18:50</span>
            <h4>Kettlebell</h4>
            <ul>
                <li>Anna Andersson</li>
                <li>Kalle Karlsson</li>
            </ul>
            <span>X</span>

        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
