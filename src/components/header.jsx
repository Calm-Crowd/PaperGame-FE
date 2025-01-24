import React, { useState } from 'react';

function Header({joinRoom}) {
  const [showModal, setShowModal] = useState(false);

  const handleBuildGameClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="logo">Paper Games</a>
        {joinRoom && <button className="join-button">Join Room</button>}
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

        .logo {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;
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
      `}</style>
    </div>
  );
}

export default Header;
