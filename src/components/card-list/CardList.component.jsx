import React from 'react';
import Card from '../card/Card.component';
import '../card-list/card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
