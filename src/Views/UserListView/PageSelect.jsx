import React from 'react';

const PageSelect = ({ viewNextPage, viewPrevPage, currentPage }) => (
  <div className='page-select'>
    <div className='left-arrow' onClick={viewPrevPage} style={{ visibility: (currentPage > 1) ? 'visible' : 'hidden' }}>&lt;</div>
    <div className='right-arrow' onClick={viewNextPage}>&gt;</div>
  </div>
);

export default PageSelect;