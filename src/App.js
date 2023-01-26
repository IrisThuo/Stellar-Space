import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AboutMars from "./views/AboutMars";
import Home from "./views/Home";
import MarsRovers from "./views/MarsRovers";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMars" element={<AboutMars />} />
        <Route path="/MarsRovers" element={<MarsRovers/>} />
      </Routes>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
