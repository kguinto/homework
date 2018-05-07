import React from 'react';
import ProfileCircle from './ProfileCircle';

const Header = ({ title }) => (
  <header className='App-header'>
    <div className='view-title'>{title}</div>
    <ProfileCircle />
  </header>
);

export default Header;