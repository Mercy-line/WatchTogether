import React from "react";
import Chat from "../components/Chat";

const PlayerPage = () => {
  return (
    <div className="min-h-screen bg-[#0e1320] text-white p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        Watch Together – Video Player
      </h1>

      <div className="w-full max-w-3xl bg-black rounded-lg shadow-lg overflow-hidden">
        <video
          className="w-full"
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex gap-4 mt-6">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white">
          Play
        </button>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white">
          Pause
        </button>
      </div>
      <Chat/>
    </div>
  );
};

export default PlayerPage;
