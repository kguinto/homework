import React from 'react';
import UserList from './UserList';
import SearchBar from './SearchBar';
import PageSelect from './PageSelect';

const UserListView = ({ users, viewUser }) => (
  <div className='view user-list-view'>
    <header className="App-header">
      Users
    </header>
    <SearchBar />
    <UserList users={users} viewUser={viewUser} />
    <PageSelect />
  </div>
);

export default UserListView;