import React from 'react';

const AdminPage: React.FC = () => {

  return (
    <div>
      <h2>Admin page</h2>
      <h3>Lägg till pass</h3>
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
