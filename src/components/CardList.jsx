import React from 'react';
import Card from './Card';

const CardList = ({ cards, onCardClick }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardList;
