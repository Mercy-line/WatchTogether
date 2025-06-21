// import React from "react";
// import AuthForm from "../components/AuthForm";

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen bg-[#0e1320] text-white flex items-center justify-center flex-col px-4">
//       <h1 className="text-4xl font-bold text-purple-400 mb-4">
//         Watch Together
//       </h1>
//       <div className="bg-[#141c2f] rounded-lg p-8 w-full max-w-md shadow-lg">
//         <AuthForm />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ Create navigate instance

  // ✅ This function runs when user logs in
  const handleAuth = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ Save to localStorage
    navigate("/"); // ✅ Redirect to RoomList/Home
  };

  return (
    <div className="min-h-screen bg-[#0e1320] text-white flex items-center justify-center flex-col px-4">
      <h1 className="text-4xl font-bold text-purple-400 mb-4">
        Watch Together
      </h1>

      <div className="bg-[#141c2f] rounded-lg p-8 w-full max-w-md shadow-lg">
        {user ? (
          <p className="text-center text-lg">✅ Welcome, {user.email}</p>
        ) : (
          <AuthForm onAuth={handleAuth} /> // ✅ use redirect handler
        )}
      </div>
    </div>
  );
};

export default LoginPage;

