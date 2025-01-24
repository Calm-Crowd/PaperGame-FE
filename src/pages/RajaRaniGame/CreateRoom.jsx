import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import ProfileImages from "./ProfileImages";
import bgImage from "../../assets/bg-modal.png";
import image1 from "../../assets/Profile-Images/image-1.jpg";
import image2 from "../../assets/Profile-Images/image-2.jpg";
import image3 from "../../assets/Profile-Images/image-3.jpg";
import image4 from "../../assets/Profile-Images/image-4.jpg";
import image5 from "../../assets/Profile-Images/image-5.jpg";
import image6 from "../../assets/Profile-Images/image-6.jpg";
import JoinRoom from "../../components/JoinRoom";

const CreateRoom = () => {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [useName, setUseName] = useState("");
  const [roomId, setRoomId] = useState("");

  const navigate = useNavigate();

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handlePlayNow = () => {
    navigate('/Coming-Soon');
  };

  const handleJoinRoom = () => {
    // Add logic to join room with roomId
    console.log("Joining Room with ID:", roomId);
    setIsJoinModalOpen(false);
    // Navigate or make an API call to join the room
  };
  
  return (
    <div className="row mt-5">
      <div className="name-image-container">
      <div className="col-md-12">
          <div className="d-flex justify-content-center align-items-center mt-5">
            {/* Display the selected image */}
            <div className="image-display">
              <div className="image-rectangle">
                <img
                  src={selectedImage || "/path/to/default-image.jpg"} // Show default if no image is selected
                  alt="Selected Profile"
                  className="selected-image-rectangle"
                />
                <div className="edit-icon" onClick={() => setIsPopupOpen(true)}>
                  ✏️ {/* You can replace this with a real icon */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Selector Popup */}
        {isPopupOpen && (
          <ProfileImages
            images={images}
            onImageSelect={handleImageSelect}
            onClose={() => setIsPopupOpen(false)}
          />
        )}

        <div className="col-md-12">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <p>Enter Your Name: </p>
            <div className="name-input mb-3">
              <input
                type="text"
                placeholder=""
                value={useName}
                onChange={(e) => setUseName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <button 
            disabled={!useName}  
            className={`create-room-btn ${!useName ? "disabled-btn" : ""}`}
            onClick={handlePlayNow}
          >
            Create Room
          </button>
          <button 
            disabled={!useName} 
            className={`create-room-btn join-btn ${!useName ? "disabled-btn" : ""}`}
            onClick={() => setIsJoinModalOpen(true)}
          >
              Join Room
          </button>
        </div>
        {isJoinModalOpen && 
        <JoinRoom 
          roomId={roomId} 
          setRoomId={setRoomId}
          setIsJoinModalOpen={setIsJoinModalOpen}
          handleJoinRoom={handleJoinRoom}
        />}
        <style>{`
       .name-image-container {
          border: 1px solid #ccc;
          padding: 20px;
          width: 50%;
          margin: 0 auto;
          border-radius: 4px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          background-image: url(${bgImage});
          background-size: cover; /* Ensures the image covers the container */
          background-position: center; /* Centers the image */
          background-repeat: no-repeat; 
        }
        .image-display {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-rectangle {
          position: relative;
          width: 200px; /* Rectangle width */
          height: 150px; /* Rectangle height */
          border-radius: 5px;
        }
        .selected-image-rectangle {
          width: 100%;
          height: 100%;
          // object-fit: cover;
          border-radius: 5px;
        }
        .edit-icon {
          position: absolute;
          bottom: -15px;
          right: -12px;
          font-size: 18px;
          background-color: rgb(255, 255, 255);
          color: white;
          padding: 6px;
          border-radius: 50%; 
          cursor: pointer;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
        }
        .edit-icon:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        .name-input{
            margin-left: 20px;
        }
        .name-input input {
          text-align: center; /* Center-align the input text */
        }
        .create-room-btn {
          background-color: #007bff; /* Primary blue color */
          color: white; /* Text color */
          padding: 10px 20px; /* Spacing */
          font-size: 16px; /* Font size */
          font-weight: bold; /* Bold text */
          border: none; /* Remove border */
          border-radius: 5px; /* Rounded corners */
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          cursor: pointer; /* Pointer cursor */
          transition: all 0.3s ease; /* Smooth transitions */
        }

        .create-room-btn:hover {
          background-color: #0056b3; /* Darker blue on hover */
          box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2); /* Slightly larger shadow */
          transform: translateY(-2px); /* Lift effect */
        }

        .create-room-btn:disabled,
        .disabled-btn {
          background-color: #d3d3d3; /* Light gray for disabled */
          color: #8a8a8a; /* Muted text color */
          cursor: not-allowed; /* Disable pointer */
          box-shadow: none; /* Remove shadow */
          transform: none; /* Remove lift effect */
        }
        .join-btn{
          margin-left: 20px;
        }
  `}</style>
      </div>
    </div>
  );
};

export default CreateRoom;
