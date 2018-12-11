import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="img-div">
        <img className="header-pic" src="./vadarnew.png" alt="darth-vader" />
      </div>
      <NavLink className="main-title" to="/home" name="home">
        SWAPi Box
      </NavLink>
    </div>
  );
};
