import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super()
    this.state = {
      isFavorite: false
    }
  }

  // handleClick = (card) => {
  //   this.props.storeCard(card)
  //   this.setState({
  //     isFavorite: isFavorite === !isFavorite
  //   })

  // }

  render() {
    const { cardData, storeCard } = this.props;
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
        <button onClick={() => this.handleClick(card)}>
        {card.isFavorite ? "unfavorite" : "favorite"}</button>
        <ul className="temp">{listItems}</ul>
      </div>
    );
  }
}

export default Card;
