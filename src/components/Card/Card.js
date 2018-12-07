import React from 'react';

export const Card = ({ cardData }) => {
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
    <div>
      <h1 className="temp">CARD</h1>
      <ul className="temp">{listItems}</ul>
      <button>Favorite?</button>
    </div>
  );
};
