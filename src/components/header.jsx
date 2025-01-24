import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function Header({ joinRoom, showBackButton }) {
  const [showModal, setShowModal] = useState(false);

  const handleBackClick = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <div>
      <nav className="navbar">
        <div className="left-section">
          {showBackButton && <button className="back-icon-button" onClick={handleBackClick}>
            <FaArrowLeft className="back-icon" /> {/* Back Arrow Icon */}
          </button>}
          <a href="/" className="logo">Paper Games</a>
        </div>
        <div className="nav-buttons">
          {joinRoom && <button className="join-button">Join Room</button>}
        </div>
      </nav>
      <style>{`
        .navbar {
          width: 100%;
          padding: 20px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px dashed #a68b63;
          margin-bottom: 10px;
          box-sizing: border-box;
        }

        .left-section {
          display: flex;
          align-items: center;
          gap: 10px; /* Space between icon and logo */
        }

        .back-icon-button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
        }

        .back-icon {
          font-size: 1.5rem;
          color: #333;
        }

        .back-icon-button:hover .back-icon {
          color: #000;
        }

        .logo {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;
        }

        .nav-buttons {
          display: flex;
          gap: 10px; /* Space between buttons */
        }

        .join-button {
          background-color: transparent;
          border: #000 dashed 2px;
          padding: 10px;
          border-radius: 2px;
          cursor: pointer;
          font-size: 1.3rem;
          transition: background-color 0.3s ease;
        }

        .join-button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}

export default Header;
