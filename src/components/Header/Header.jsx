import React from 'react';
import ThemeToggleButton from '../Theme/ThemeToggleButton';
import UserLocation from '../UserLocation';
import WeatherApi from '../Api/WeatherApi';

const Header = ({ coords, setCoords }) => {
  return (
    <>
      <ThemeToggleButton />
      <UserLocation onLocation={setCoords} />
      {coords && <WeatherApi coords={coords} />}
    </>
  );
};

export default Header;
