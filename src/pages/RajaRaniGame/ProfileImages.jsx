import React from "react";

const ProfileImages = ({ images, onClose, onImageSelect }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>Select an Image</h3>
        <div className="popup-images">
          {images.map((image, index) => (
            <div
              key={index}
              className="popup-image"
              onClick={() => {
                onImageSelect(image)
                onClose()
            }}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="popup-image-thumbnail"
              />
            </div>
          ))}
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>

      {/* Styles for Popup */}
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          width: 80%;
          max-width: 400px;
        }
        .popup-images {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .popup-image-thumbnail {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
        }
        .popup-image-thumbnail:hover {
          border: 2px solid #007bff;
        }
        .close-btn {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
        }
        .close-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ProfileImages;
