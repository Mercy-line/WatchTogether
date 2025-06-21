import React from "react";
import { Link } from "react-router-dom";
import RoomList from "../components/RoomList"; // ✅ import the RoomList

const Home = () => {
  // Dummy rooms for now
  const dummyRooms = [
    { id: "1", name: "React Study Room" },
    { id: "2", name: "Movie Night 🍿" },
    { id: "3", name: "Chill & Code" },
  ];

  return (
    <div className="min-h-screen bg-[#0e1320] text-white px-4 py-10 flex flex-col items-center">
      {/* Header Section */}
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-4">
           Watch Together
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Invite your friends, share a room, and enjoy synchronized videos while
          chatting — from anywhere.
        </p>
      </header>

      {/* CTA */}
      <Link
        to="/login"
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg mb-10"
      >
     Login to Get Started
      </Link>

      {/* Room List */}
      <section className="w-full max-w-5xl">
        <RoomList rooms={dummyRooms} />
      </section>
    </div>
  );
};

export default Home;
