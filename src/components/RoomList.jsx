import React from "react";
import { Link } from "react-router-dom";

const RoomList = ({ rooms = [] }) => {
  return (
    <div className="mt-10 w-full max-w-2xl">
      <h2 className="text-2xl font-extrabold text-purple-400 mb-6 text-center tracking-wide">
        🛋️ Available Rooms
      </h2>

      {rooms.length === 0 ? (
        <div className="bg-[#1f2a3f] text-gray-400 p-4 rounded-lg text-center shadow">
          No rooms available. Be the first to create one!
        </div>
      ) : (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {rooms.map((room) => (
            <li
              key={room.id}
              className="bg-[#1f2a3f] hover:bg-[#2d3c5a] p-6 rounded-lg shadow-lg transition duration-300"
            >
              <Link
                to={`/room/${room.id}`}
                className="text-blue-400 text-xl font-semibold hover:underline"
              >
                🎬 {room.name}
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Room ID: <span className="font-mono">{room.id}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoomList;
