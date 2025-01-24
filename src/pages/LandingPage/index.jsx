import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../../components/header';
import { Icon } from '@iconify/react';
import outputImage from '../../assets/raja.svg';
import image from '../../assets/image.png';


const LandingPage = () => {
  const navigate = useNavigate();
  
  const handlePlayNow = () => {
    navigate('/Raja-Rani-Manthri-Sipai');
  };

  return (
    <div className="landing-page-container app-container">
      <Header joinRoom={true} showBackButton={false}/>
      <main className="main-content">
        <div className="game-card">
          <img src={outputImage} alt="img" className="responsive-image plus-icon" />
          <h2>Raja Rani Manthri Sipai</h2>
          <p>A classic Indian game of roles and strategy.</p>
          <button onClick={handlePlayNow}>Play Now</button>
        </div>
        <div className="game-card text-center">
          <div className="plus-icon">
            <Icon icon="fa:plus" style={{ fontSize: '48px', color: 'royalblue' }} />
          </div>
          <h2>Want more fun?</h2>
          <h2>Create your own game</h2>
        </div>
      </main>
      <style>{`
        .main-content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .game-card {
          // background-color: #f5f5f5;
          background-image: url(${image});
          border: 1px solid #ccc;
          padding: 30px;
          border-radius: 5px;
          box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-size: cover;
          text-align: center;


        }

          .game-card.load-animation {
          animation: fadeIn 1s forwards;
          opacity: 1; /* Make it visible during animation */
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px); /* Start from below */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* End at the normal position */
          }
        }

        .game-card:hover {
          transform: scale(1.1); /* Pop-up effect */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
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
          background-color: green;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }



        .game-card button:hover {
          background-color:rgb(33, 115, 30);
        }

        .plus-icon{
        margin-bottom:25px
        }

        .responsive-image {
          width: 50%;
          height: auto;
          display: block;
          max-width: 600px;
          margin: 0 auto;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          object-fit: cover;
          margin-bottom:25px

        }
      `}</style>
    </div>
  );
};

export default LandingPage;
