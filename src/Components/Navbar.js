import { Link } from "react-router-dom"
import React, {useState} from "react"


function Navbar(){
    const [user,setUser] = useState(null)

    function handleLogin(){
        setUser({
            id:1,
            username: "user"
        })
        
    }

    function handleLogOut(){
        setUser(null)
    }


    return (
    <div className="header">
    <Link to="/">Home</Link>
    <Link to="/aboutMars">Mars Weather</Link>
    <Link to="/MarsRovers">Rover Photos</Link>

    {user ? (
        <button onClick={handleLogOut}>Logout</button>)
        :
        (<button onClick={handleLogin}>Login</button>
    )}
    </div>
    )
}


export default Navbar