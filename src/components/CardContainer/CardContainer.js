import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../Card/Card';
import './CardContainer.css';

export const CardContainer = ({ displayData, toggleFavorite, cardCount }) => {
  const displayCards = displayData.map(card => {
    return (
      <Card
        cardData={card}
        key={card.name}
        id={card.name}
        toggleFavorite={toggleFavorite}
      />
    );
  });

  if (cardCount === 0) {
    return (
      <div>
        <h1 className="no-favs">NO FAVORITES ADDED YET!</h1>
      </div>
    );
  } else {
    return <div className="card-container">{displayCards}</div>;
  }
};

CardContainer.propTypes = {
  displayData: PropTypes.array,
  toggleFavorite: PropTypes.func,
  cardCount: PropTypes.number
};
