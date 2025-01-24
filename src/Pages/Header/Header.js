import React from 'react';

const Header = ({ onJoinGameClick }) => {
  return (
    <header className="header">
      <div className="logo">Game Zone</div>
      <button className="join-game-button" onClick={onJoinGameClick}>
        Join Game
      </button>

      <style jsx>{`
        .header {
          width: 100%;
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fef6e4; /* Soft paper-like background */
          color: #343a40;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for paper effect */
          background-image: url('https://www.transparenttextures.com/patterns/paper-1.png'); /* Subtle paper texture */
          background-size: cover;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
          font-family: 'Merriweather', serif; /* Elegant serif font for a classic look */
        }

        .join-game-button {
          padding: 12px 24px;
          background-color: #ffb3b3;
          color: #333;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .join-game-button:hover {
          background-color: #ff8080;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Slight hover shadow for paper effect */
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
          }

          .join-game-button {
            width: 100%;
            margin-top: 10px;
          }

          .logo {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
