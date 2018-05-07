import React from 'react';

const SearchBar = ({ handleSearchChange }) => (
  <div className='search-bar'>
    <input type='text' placeholder='Search...' onKeyDown={(event) => {handleSearchChange(event)}}/>
  </div>
);

export default SearchBar;