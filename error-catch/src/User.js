import React from 'react';

function User({ user, users, onToggle }) {
  // if (!user) {
  //   return null;
  // }
  // if (!users) return null;

  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username:</b> {user.username}
      </div>
      <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => onToggle(user.id)}>
          {user.username}
        </li>
      ))}
    </ul>
    </div>
  );
}

User.defaultProps = {
  onToggle: () => {
    console.warn('onToggle is missing!');
  }
};

export default User;