import React from 'react';
import PropTypes from 'prop-types';
import cardImages from '../../cardImages';
import './Card.css';

export const Card = ({ cardData, toggleFavorite }) => {
  const card = cardData;
  const keys = Object.keys(cardData);
  const cardImagesEntries = Object.entries(cardImages);
  const matchedImage = cardImagesEntries.find(imageEntry => {
    return card.name === imageEntry[0];
  });

  const image = matchedImage[1];

  const listItems = keys.map(listItem => {
    if (listItem === 'name') {
      return (
        <li className="name" key={listItem}>
          {cardData[listItem]}
        </li>
      );
    }

    if (listItem === 'residents') {
      if (cardData[listItem].length > 0) {
        const residents = cardData[listItem].join(', ');
        return (
          <li className="info" key={listItem}>
            {listItem}: {residents}
          </li>
        );
      } else if (cardData[listItem].length === 0) {
        return (
          <li className="info" key={listItem}>
            {listItem}: none
          </li>
        );
      }
    }
    if (listItem !== 'isFavorite' && listItem !== 'category') {
      return (
        <li className="info" key={listItem}>
          {listItem}: {cardData[listItem]}
        </li>
      );
    }
  });

  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay" />
      <div className="button-div">
        <button className="fave-button" onClick={() => toggleFavorite(card)}>
          <i
            className={card.isFavorite ? 'fas fa-star two' : 'far fa-star one'}
          />
        </button>
      </div>
      <div className="list-container">
        <ul className="info-section">{listItems}</ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
  id: PropTypes.string,
  toggleFavorite: PropTypes.func
};
