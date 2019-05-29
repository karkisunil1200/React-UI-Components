import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      <h3>Welcome to React Social Card!</h3>
      <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
