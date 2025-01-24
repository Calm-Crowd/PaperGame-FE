import React from 'react';

const TrumpCard = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Trump Card</h1>
      <p>
        A trump card is the ultimate card that turns the tables in your favor. Play it wisely and win the game!
      </p>
      <img 
        src="https://via.placeholder.com/300" 
        alt="Trump Card" 
        style={{ marginTop: '20px', borderRadius: '10px' }} 
      />
      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        "In the game of life, everyone has a trump card. Find yours."
      </p>
    </div>
  );
};

export default TrumpCard;
