import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#0e1320] text-white flex items-center justify-center flex-col px-4">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
        Watch Together
      </h1>

      {/* Info/Error Box */}
      <div className="bg-blue-600 px-4 py-2 rounded mb-4 text-sm text-white text-center max-w-md w-full shadow-md">
        Registration Info: You’re signing up as a new user.
      </div>

      {/* User ID placeholder */}
      <div className="text-xs bg-gray-800 px-3 py-1 rounded mb-6">
        User ID: 05351476910541337339 (Anonymous)
      </div>

      {/* Registration Form */}
      <div className="bg-[#141c2f] rounded-xl p-8 w-full max-w-md shadow-xl">
        <form className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-center text-purple-300 mb-2">
            Create Your Account
          </h2>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">
              📧 Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded bg-[#1f2a3f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">🔒 Password</label>
            <input
              type="password"
              placeholder="********"
              className="p-3 rounded bg-[#1f2a3f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white py-3 rounded text-lg font-semibold transition"
          >
            ✅ Register
          </button>

          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>

          <button
            type="button"
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow mt-2 transition"
          >
        Continue Anonymously
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
