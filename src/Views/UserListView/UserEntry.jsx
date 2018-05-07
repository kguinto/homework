import React from 'react';

const UserEntry = ({ user, viewUser }) => (
  <div className='user-entry' onClick={(event) => { viewUser(user) }}>{user.first_name} {user.last_name}</div>
);

export default UserEntry;