import React, { useState } from 'react';

const LandingPage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelection = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className="landing-page">
      <div className="game-selection-container">
        <h1>Welcome to the Game Zone!</h1>
        <p>Choose a game to get started</p>
        <div className="game-cards">
          <div className="game-card" onClick={() => handleGameSelection('Trump Card')}>
            <img src="https://example.com/trump-card-image.jpg" alt="Trump Card" className="game-card-img"/>
            <h3>Trump Card</h3>
          </div>
          <div className="game-card" onClick={() => handleGameSelection('Raja Rani')}>
            <img src="https://example.com/raja-rani-image.jpg" alt="Raja Rani" className="game-card-img"/>
            <h3>Raja Rani</h3>
          </div>
        </div>

        {selectedGame && (
          <div className="game-info">
            <h2>You selected: {selectedGame}</h2>
            <p>Click below to start playing {selectedGame}</p>
            <button className="start-button">Start {selectedGame}</button>
          </div>
        )}
      </div>
      <style jsx>{`
        .landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.game-selection-container {
  text-align: center;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #343a40;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #6c757d;
}

.game-cards {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.game-card {
  cursor: pointer;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.game-card:hover {
  transform: scale(1.05);
}

.game-card-img {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.game-card h3 {
  padding: 10px;
  font-size: 1.5rem;
  color: #343a40;
  background-color: #fff;
  margin: 0;
  border-top: 2px solid #007bff;
}

.game-info {
  margin-top: 30px;
}

.start-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #218838;
}

      `}</style>
    </div>
  );
};

export default LandingPage;
