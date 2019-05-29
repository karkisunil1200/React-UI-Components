import React from 'react';
import CardContent from './CardContent';
import CardBanner from './CardBanner';
import './Card.css';

const CardContainer = () => {
  return (
    <div className='card-container'>
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;
