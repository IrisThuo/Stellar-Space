 import React from "react";
 import { Route, Routes } from "react-router-dom";
import AboutMars from "./views/AboutMars";
import Home from "./views/Home";
import ObjectsNearEarth from "./views/ObjectsNearEarth";
import MarsRovers from "./views/MarsRovers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutMars" element={<AboutMars/>} />
        <Route path="/objects" element={<ObjectsNearEarth/>} />
        <Route path="/rovers" element={<MarsRovers/>} />
      </Routes>
      {/* <Navbar/>
      <Footer/>
      {/* <MarsRovers/> */}
      {/* <AboutMars/> */}
    </div>
  );
}
export default App;







