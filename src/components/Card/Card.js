import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Card.css';

class Card extends Component {
  render() {
    const { cardData, toggleFavorite } = this.props;
    const card = cardData;
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
      if (listItem !== 'isFavorite' && listItem !== 'category') {
        return (
          <li className="temp">
            {listItem}: {cardData[listItem]}
          </li>
        );
      }
    });

    return (
      <div className="card">
        <button onClick={() => toggleFavorite(card)}>
          {!card.isFavorite ? 'favorite' : 'unfavorite'}
        </button>
        <ul className="temp">{listItems}</ul>
      </div>
    );
  }
}

Card.PropTypes = {
  cardData: PropTypes.objectOf,
  key: PropTypes.string,
  id: PropTypes.string,
  toggleFavorite: PropTypes.func
}

export default Card;
