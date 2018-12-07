import React from 'react';

import { Card } from '../Card/Card';
import './CardContainer.css';

export const CardContainer = ({ displayData }) => {
  const displayCards = displayData.map((card, i) => {
    const key = Math.random() + i;
    return <Card cardData={card} key={key} />;
  });
  return (
    <div>
      <h1 className="temp">CARDS COMING SOON</h1>
      {displayCards}
    </div>
  );
};
