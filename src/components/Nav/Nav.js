import React, { Component } from 'react';
import './Nav.css';

export const Nav = () => {

  return(
    <div>
      <div className="header">
        <h1>SWAPIBOX</h1>
        <button>Favorites</button>
      </div>
      <div className="nav-buttons">
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    </div>
  )
}


