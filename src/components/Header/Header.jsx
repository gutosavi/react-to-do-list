import React from 'react';
import { ThemeToggleButton } from '../Theme/ThemeToggleButton';
import UserLocation from '../UserLocation';

const Header = () => {
  return (
    <>
      <UserLocation />
      <ThemeToggleButton />
      <div>tempo</div>
    </>
  );
};

export default Header;
