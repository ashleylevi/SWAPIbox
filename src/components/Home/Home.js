import React from 'react';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { ScrollingText } from '../ScrollingText/ScrollingText';

import PropTypes from 'prop-types';

export const Home = props => {
  const { fetchData, displayFavorites, currentFilm, cardCount } = props;
  if (currentFilm) {
    return (
      <div className="home">
        <Header />
        <Nav
          fetchData={fetchData}
          displayFavorites={displayFavorites}
          cardCount={cardCount}
        />
        <ScrollingText {...currentFilm} />
      </div>
    );
  } else {
    return (
      <div className="home">
        <Header />
        <Nav
          fetchData={fetchData}
          displayFavorites={displayFavorites}
          cardCount={cardCount}
        />
      </div>
    );
  }
};

Home.propTypes = {
  fetchData: PropTypes.func,
  displayFavorites: PropTypes.func,
  currentFilm: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cardCount: PropTypes.number
};
