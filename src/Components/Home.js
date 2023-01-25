import React, { useEffect, useState } from "react";

function Home() {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=2f8QHvCZ3kmgqZhB8tFQUTSAlyrcZeUvJPMZZZeP"
    const [pictureOfTheDay, setpictureOfTheDay] = useState([]);

     useEffect(()=>{
        fetch(API_URL)
        .then(r => r.json())
        .then(data => setpictureOfTheDay(data))
        
     },[])
  
    // console.log(pictureOfTheDay);

    return (
        <div>
            <div>
               <h1>Welcome to Stellar Space</h1> 
               <p>The app aims to do: 
                <ol>
                    <li>Display image of the day</li>
                    <li>See all the objects near thge earth</li>
                    <li>Visualize the weather on planet Mars</li>
                    <li>Show all Mars Rover Photos</li>
                    <li>Display a map of asteroids within space</li>
                </ol>
               </p>
            </div>
            <div>
                <h1>{pictureOfTheDay.title}</h1>
                <p>{pictureOfTheDay.date}</p>
                
                
            </div>
            
            <div>
                <p><strong>NASA image of the day</strong></p>
                <img src={pictureOfTheDay.url} alt=""/>
                
            </div>
            <div>
            <p>{pictureOfTheDay.explanation}</p>
            </div>
            
             

        </div>
    )
}

export default Home