import React from 'react';
import CardTitle from './CardTitle';
import './Card.css';

const CardContent = () => {
  return (
    <div className='card-content'>
      <CardTitle />
      <p>React Makes it Painless to create interactive UIS. Design simple views for each state in your application.</p>
    </div>
  );
};

export default CardContent;
