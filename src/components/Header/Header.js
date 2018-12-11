import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="img-div">
        <img className="header-pic" src="./vadarnew.png" alt="darth-vader" />
      </div>
      <h1 className="main-title">SWAPi Box</h1>
    </div>
  );
};
