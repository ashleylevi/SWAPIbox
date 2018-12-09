import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

export const Nav = ({ fetchData, cardCount }) => {
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
        <button name="favorites" onClick={fetchData}>
          FAVORTIES: {cardCount}
        </button>
      </section>
      <section className="background-fade" />
    </div>
  );
};

Nav.propTypes = {
  fetchData: PropTypes.func,
  displayFavorites: PropTypes.func,
  cardCount: PropTypes.arrayOf
}
