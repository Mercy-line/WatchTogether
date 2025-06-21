import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RoomsPage from "./pages/Rooms";
import PlayerPage from "./pages/Player";
function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">hello world</h1> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/rooms" element={<RoomsPage/>}/>
          <Route path="/player" element={<PlayerPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
