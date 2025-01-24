import React from 'react'

const JoinRoom = ({
    roomId,
    setRoomId,
    setIsJoinModalOpen,
    handleJoinRoom
}) => {
  return (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Join Room</h2>
            <input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="form-control mb-3"
            />
            <div className="modal-buttons">
              <button
                onClick={handleJoinRoom}
                className="create-room-btn"
                disabled={!roomId}
              >
                Join
              </button>
              <button
                onClick={() => setIsJoinModalOpen(false)}
                className="create-room-btn cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
          <style>{`
            .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
          .modal-buttons {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
          .cancel-btn {
            background-color: #dc3545;
          }
          `}</style>
        </div>

  )
}

export default JoinRoom