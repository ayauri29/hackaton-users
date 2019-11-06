import React from 'react';
import Logo from '../logo.png';

export const Header = () => {
  return (
    <header>
       <img className="logo" src={Logo} alt="My logo" />
    </header>
  );
};
