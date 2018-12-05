import React from 'react';
import './Nav.css';

export const Nav = () => {
  return (
    <div>
      <section className="nav">
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>Favorites</button>
      </section>
      <section className="background-fade" />
    </div>
  );
};
