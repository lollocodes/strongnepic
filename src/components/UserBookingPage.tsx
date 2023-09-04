import React from 'react';
import { User } from './../types/User';

type UserBookingPageProps = {
  user: User;
}

const UserBookingPage: React.FC<UserBookingPageProps> = (props) => {
  return (
    <div>
      <h2>Kettlebell</h2>
      <p>60 min</p>
      <p>Bokar som <b>{props.user.username}</b></p>
      <button>Bekräfta bokning</button>
    </div>
  );
};

export default UserBookingPage;
