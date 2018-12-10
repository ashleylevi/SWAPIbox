import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

export const Nav = ({ fetchData, cardCount }) => {
  return (
    <div>
      <section className="nav">
        <button className="nav-button" name="people" onClick={fetchData}>
          PEOPLE
        </button>
        <button className="nav-button" name="planets" onClick={fetchData}>
          PLANETS
        </button>
        <button className="nav-button" name="vehicles" onClick={fetchData}>
          VEHICLES
        </button>
        <button className="nav-button" name="favorites" onClick={fetchData}>
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
  cardCount: PropTypes.array
}
