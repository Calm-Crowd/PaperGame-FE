import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './LandingPage.css'; // Separate CSS file for cleaner structure

const LandingPage = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleGameSelection = (game) => {
    setSelectedGame(game);
    navigate(game);
  };

  const handleJoinGameClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const handleRoomIdSubmit = () => {
    if (roomId) {
      alert(`Joining game with Room ID: ${roomId}`);
      setShowModal(false);
    } else {
      alert('Please enter a Room ID');
    }
  };

  return (
    <div className="landing-page">
      <Header onJoinGameClick={handleJoinGameClick} />

      <div className="game-selection-container">
        <h1>Welcome to the Game Zone!</h1>
        <p>Choose a game to get started</p>
        <div className="game-cards">
          <div className="game-card" onClick={() => handleGameSelection('/trump-card')}>
            <img src="https://example.com/trump-card-image.jpg" alt="Trump Card" className="game-card-img" />
            <h3>Trump Card</h3>
          </div>
          <div className="game-card" onClick={() => handleGameSelection('/raja-rani')}>
            <img src="https://example.com/raja-rani-image.jpg" alt="Raja Rani" className="game-card-img" />
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

      {/* Modal for entering Room ID */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Enter Room ID</h2>
            <input
              type="text"
              value={roomId}
              onChange={handleRoomIdChange}
              placeholder="Room ID"
              className="room-id-input"
            />
            <div className="modal-buttons">
              <button className="close-button" onClick={handleModalClose}>Close</button>
              <button className="join-button" onClick={handleRoomIdSubmit}>Join Game</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
