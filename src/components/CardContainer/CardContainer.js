import React from 'react';

import { Card } from '../Card/Card';
import './CardContainer.css';

export const CardContainer = ({ displayData }) => {
  const displayCards = displayData.map((card) => {
    // const id = Date.now();
    return <Card cardData={card} key={card.name}/>;
  });
  return (
    <div className="card-container">
      {displayCards}
    </div>
  );
};
