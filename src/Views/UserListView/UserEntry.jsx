import React from 'react';
import ProfileCircle from '../../sharedComponents/ProfileCircle';

const UserEntry = ({ user, viewUser }) => (
  <div className='user-entry' onClick={(event) => { viewUser(user) }}>
    <ProfileCircle />
    <div className='user-name'>{user.first_name} {user.last_name}</div>
    <div className='right-arrow'>&gt;</div>
  </div>
);

export default UserEntry;