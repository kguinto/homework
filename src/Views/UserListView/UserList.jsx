import React from 'react';
import UserEntry from './UserEntry';

const UserList = ({ users, viewUser }) => (
  <div className="user-list">
    { users.map(
        user => <UserEntry key={user.id} user={user} viewUser={viewUser}/>
    ) }
  </div>
);

export default UserList;