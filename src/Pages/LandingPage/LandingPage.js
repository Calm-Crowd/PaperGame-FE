import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './LandingPage.css';
import RoomidModal from '../Modal/RoomidModal';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

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
          <div className="game-card" onClick={() => navigate('/trump-card')}>
            <img src="https://example.com/trump-card-image.jpg" alt="Trump Card" className="game-card-img" />
            <h3>Trump Card</h3>
          </div>
          <div className="game-card" onClick={() => navigate('/raja-rani')}>
            <img src="https://example.com/raja-rani-image.jpg" alt="Raja Rani" className="game-card-img" />
            <h3>Raja Rani</h3>
          </div>
        </div>
      </div>

      {/* Render RoomModal when showModal is true */}
      {showModal && (
        <RoomidModal
          roomId={roomId}
          onRoomIdChange={handleRoomIdChange}
          onSubmit={handleRoomIdSubmit}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default LandingPage;
