import AboutMars from "./views/AboutMars";
import Home from "./views/Home";

import "./App.css"
// import AsteroidsMap from "./views/AsteroidsMap";
import ObjectsNearEarth from "./views/ObjectsNearEarth";
//  import Navbar from "./Components/Navbar";
  import Footer from "./Components/Footer";
// import MarsRovers from "./views/MarsRovers";


import MarsRovers from "./views/MarsRovers";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import "./App.css"



function App() {
 
  
      

 
  const[isShowLogin, setIsShowLogin] = useState(false)

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }
  return (
    <div className="App">
      <Header/>
      <Navbar handleLoginClick={handleLoginClick}/>
      {/* <Login isShowLogin={isShowLogin}/> */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Hero/>} />
        <Route path="/aboutMars" element={<AboutMars/>} />
        <Route path="/objects" element={<ObjectsNearEarth/>} />
        <Route path="/asteroids" element={<AsteroidsMap/>} />
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







