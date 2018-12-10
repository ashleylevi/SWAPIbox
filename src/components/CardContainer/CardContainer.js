import React from 'react';
import PropTypes from 'prop-types';


import Card from '../Card/Card';
import './CardContainer.css';

export const CardContainer = ({ displayData, toggleFavorite }) => {
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
  return <div className="card-container">{displayCards}</div>;
};

CardContainer.propTypes = {
  displayData: PropTypes.array,
  toggleFavorite: PropTypes.func
}
