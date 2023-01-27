 import { Route, Routes } from "react-router-dom";
import AboutMars from "./views/AboutMars";
import Home from "./views/Home";
import ObjectsNearEarth from "./views/ObjectsNearEarth";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMars/>} />
      </Routes>
      {/* <Navbar/>
      <Footer/>
      {/* <MarsRovers/> */}
      {/* <AboutMars/> */}
    </div>
  );
}
export default App;







