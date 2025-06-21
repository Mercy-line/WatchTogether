import React from "react";

const Chat = () => {
  return (
    <div className="w-full max-w-3xl mt-8">
      {/* Chat Window */}
      <div className="h-72 overflow-y-auto bg-[#141c2f] p-5 rounded-xl shadow-md border border-gray-700 space-y-3">
        {/* Sample Messages */}
        <div className="flex items-start gap-2">
          <span className="text-purple-400 font-semibold">👩 Alice:</span>
          <p className="text-white">Hey, ready to start?</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-blue-400 font-semibold">👨 Bob:</span>
          <p className="text-white">Yes, let's go!</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-400 font-semibold">🧑 You:</span>
          <p className="text-white">Awesome! I'm here.</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="mt-4 flex items-center gap-3">
        <input
          type="text"
          placeholder="💬 Type your message..."
          className="flex-grow p-3 rounded-lg bg-[#1f2a3f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition">
          🚀 Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
