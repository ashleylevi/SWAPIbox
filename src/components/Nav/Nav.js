import React from 'react';
import './Nav.css';

export const Nav = () => {
  return (
    <div>
      <section className="nav">
        <button>PEOPLE</button>
        <button>PLANETS</button>
        <button>VEHICLES</button>
        <button>FAVORTIES</button>
      </section>
      <section className="background-fade" />
    </div>
  );
};
