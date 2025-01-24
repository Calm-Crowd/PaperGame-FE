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
        <div className="game-buttons">
          <button className="game-button" onClick={() => handleGameSelection('Trump Card')}>
            Trump Card
          </button>
          <button className="game-button" onClick={() => handleGameSelection('Raja Rani')}>
            Raja Rani
          </button>
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

.game-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.game-button {
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.game-button:hover {
  background-color: #0056b3;
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
