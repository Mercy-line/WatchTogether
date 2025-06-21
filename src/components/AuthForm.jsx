import React from "react";
import { Link } from "react-router-dom";

const AuthForm = () => {
  return (
    <form className="flex flex-col gap-6 bg-[#141c2f] p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-purple-400">
        Login to Continue
      </h2>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-300">
          📧 Email
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          className="p-3 rounded bg-[#1f2a3f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-300">
          🔒 Password
        </label>
        <input
          type="password"
          placeholder="********"
          className="p-3 rounded bg-[#1f2a3f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white py-3 rounded text-lg font-semibold transition"
      >
        Login
      </button>

      <p className="text-sm text-center text-gray-400">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-400 hover:underline">
          Register here
        </Link>
      </p>

      <button
        type="button"
        className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow transition"
      >
    Continue Anonymously
      </button>
    </form>
  );
};

export default AuthForm;
