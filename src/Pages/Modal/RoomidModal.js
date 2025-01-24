import React from 'react';
import './Roomidmodal.css';

const RoomidModal = ({ roomId, onRoomIdChange, onSubmit, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Enter Room ID</h2>
                <input
                    type="text"
                    value={roomId}
                    onChange={onRoomIdChange}
                    placeholder="Room ID"
                    className="room-id-input"
                />
                <div className="modal-buttons">
                    <button className="close-button" onClick={onClose}>Close</button>
                    <button className="join-button" onClick={onSubmit}>Join Game</button>
                </div>
            </div>
        </div>
    );
};

export default RoomidModal;
