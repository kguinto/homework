import React from 'react';
import ProfileCircle from '../../sharedComponents/ProfileCircle';
import Header from '../../sharedComponents/Header';
import { height } from 'window-size';

const UserEntryView = ({ user, viewUserList }) => (
  <div className='view user-entry-view'>
    <header className='header'>
      <div className='back-button' onClick={()=>{viewUserList()}}>&lt;</div>
      <div className='title'>Profile</div>
    </header>
    <div className='heading'>
      <div style={{ fontSize: '10em' }}><ProfileCircle /></div>
      <h1>{user.first_name} {user.last_name}</h1>
    </div>
    <div className='details'>
      <div>Gender: {user.gender}</div>
      <div>Email: {user.email}</div>
      <div>IP Adress: {user.ip_address}</div>
    </div>
  </div>
);

export default UserEntryView;