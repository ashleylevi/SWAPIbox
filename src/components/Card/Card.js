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
          return <li className="info">{listItem}: none</li>;
        }
      }
      if (listItem !== 'isFavorite' && listItem !== 'category') {
        return (
          <li className="info">
            {listItem}: {cardData[listItem]}
          </li>
        );
      }
    });

    return (
      <div className="card">
          <div className="button-div">
            <button className="fave-button" onClick={() => toggleFavorite(card)}>
            <i class="far fa-star one"></i>
            <i class="fas fa-star two"></i>
              {/* {!card.isFavorite ? 'favorite' : 'unfavorite'} */}
            </button>
          </div>
        <div className="list-container">
          <ul className="info">{listItems}</ul>
        </div>
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
