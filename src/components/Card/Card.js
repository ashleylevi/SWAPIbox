import React from 'react';

import './Card.css';
// import { prependOnceListener } from 'cluster';

export const Card = ({ cardData, storeCard }) => {
  const card = cardData
  const keys = Object.keys(cardData);
  const listItems = keys.map(listItem => {
    if (listItem === 'residents') {
      if (cardData[listItem].length > 0) {
        const residents = cardData[listItem].join(', ');
        return (
          <li className="temp">
            {listItem}: {residents}
          </li>
        );
      } else if (cardData[listItem].length === 0) {
        return <li className="temp">{listItem}: none</li>;
      }
    }
    if (listItem !== 'isFavorite') {
      return (
        <li className="temp">
          {listItem}: {cardData[listItem]}
        </li>
      );
    }
  });

  return (
    <div className="card">
    <button onClick={() => storeCard(card)}>Favorite?</button>
      <ul className="temp">{listItems}</ul>
    </div>
  );
};
