import React from 'react';
import './Nav.css';
// import { prependOnceListener } from 'cluster';

export const Nav = ({ fetchData, favoriteCards, setFavoriteData }) => {
  let favorite;
  favoriteCards.length === 0
    ? (favorite = 0)
    : (favorite = favoriteCards.length);
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
        <button onClick={setFavoriteData}>FAVORTIES: {favorite}</button>
      </section>
      <section className="background-fade" />
    </div>
  );
};
