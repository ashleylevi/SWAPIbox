import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = ({ fetchData, cardCount }) => {
  return (
    <div>
      <section className="nav">
        <button className="nav-button">
          <NavLink
            className="link"
            to="/people"
            name="people"
            activeStyle={{ color: '#b99500' }}
            onClick={fetchData}
          >
            PEOPLE
          </NavLink>
        </button>
        <button className="nav-button">
          <NavLink
            className="link"
            to="/planets"
            name="planets"
            activeStyle={{ color: '#b99500' }}
            onClick={fetchData}
          >
            PLANETS
          </NavLink>
        </button>
        <button className="nav-button">
          <NavLink
            className="link"
            to="/vehicles"
            name="vehicles"
            activeStyle={{ color: '#b99500' }}
            onClick={fetchData}
          >
            VEHICLES
          </NavLink>
        </button>
        <button className="nav-button">
          <NavLink
            className="link"
            to="/favorites"
            name="favorites"
            activeStyle={{ color: '#b99500' }}
            onClick={fetchData}
          >
            FAVORTIES: {cardCount}
          </NavLink>
        </button>
      </section>
      <section className="background-fade" />
    </div>
  );
};

Nav.propTypes = {
  fetchData: PropTypes.func,
  displayFavorites: PropTypes.func,
  cardCount: PropTypes.number
};
