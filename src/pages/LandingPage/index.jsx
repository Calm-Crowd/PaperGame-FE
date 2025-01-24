import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../../components/header';

const LandingPage = () => {
  const navigate = useNavigate();
  
  const handlePlayNow = () => {
    navigate('/Raja-Rani-Manthri-Sipai');
  };

  return (
    <div className="landing-page-container app-container">
      <Header joinRoom={true}/>
      <main className="main-content">
        <div className="game-card">
          <h2>Raja Rani Manthri Sipai</h2>
          <p>A classic Indian game of roles and strategy.</p>
          <button onClick={handlePlayNow}>Play Now</button>
        </div>
        <div className="game-card text-center">
          <div className="big-plus">+</div>
          <h2>Build your own Game</h2>
        </div>
      </main>
      <style>{`
        .main-content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }

        .game-card {
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          padding: 30px;
          border-radius: 5px;
          box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.2);
          /* width: calc(50% - 10px); */
          /* min-width: 300px; */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 20px;
        }

        .game-card .big-plus {
          font-size: 50px;
          border: 1px solid #2f2f2f;
          border-radius: 50%;
        }

        .game-card h2 {
          margin-bottom: 15px;
          color: #333;
        }

        .game-card p {
          color: #555;
          margin-bottom: 20px;
        }

        .game-card button {
          background-color: #a68b63;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .game-card button:hover {
          background-color: #8c7351;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
