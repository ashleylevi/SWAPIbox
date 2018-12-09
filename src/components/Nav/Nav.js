import React from 'react';
import './Nav.css';
// import { prependOnceListener } from 'cluster';

export const Nav = ({ fetchData, displayFavorites }) => {
  return (
    <div>
      <section className="nav">
        <button name="people" onClick={fetchData}>
          PEOPLE
        </button>
        <button name="planets" onClick={fetchData}>
          PLANETS
        </button>
        <button name="vehicles" onClick={fetchData}>
          VEHICLES
        </button>
        <button name="favorites" onClick={displayFavorites}>
          FAVORTIES
        </button>
      </section>
      <section className="background-fade" />
    </div>
  );
};
