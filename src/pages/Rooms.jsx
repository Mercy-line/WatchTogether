import React from "react";
import Chat from "../components/Chat";

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-[#0e1320] text-white py-10 px-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10 text-center">
        🛋️ Join or Create a Room
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Room creation form */}
        <div className="bg-[#141c2f] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            ✨ Create a New Room
          </h2>
          <form className="flex flex-col gap-4">
            <label className="text-sm text-gray-300">Room Name</label>
            <input
              type="text"
              placeholder="e.g. Frontend Warriors"
              className="p-3 rounded bg-[#1f2a3f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white py-2 rounded-lg font-semibold transition"
            >
              ➕ Create Room
            </button>
          </form>
        </div>

        {/* Room joining form */}
        <div className="bg-[#141c2f] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            🔗 Join a Room
          </h2>
          <form className="flex flex-col gap-4">
            <label className="text-sm text-gray-300">Room Code / ID</label>
            <input
              type="text"
              placeholder="Enter code e.g. 001A23"
              className="p-3 rounded bg-[#1f2a3f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
            >
              🚪 Join Room
            </button>
          </form>
        </div>
      </div>

      {/* Chat section */}
      <div className="w-full max-w-5xl mt-12">
        <h2 className="text-2xl font-semibold text-center text-gray-300 mb-4">
          💬 Chat Preview
        </h2>
        <Chat />
      </div>
    </div>
  );
};

export default RoomsPage;
