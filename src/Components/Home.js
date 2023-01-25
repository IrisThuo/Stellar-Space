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
                
            </div>
            <div>
                <h1>{pictureOfTheDay.title}</h1>
                <p>{pictureOfTheDay.date}</p>
                
                
            </div>
            
            <div>
                <img src={pictureOfTheDay.url}/>
                
            </div>
            <div>
            <p>{pictureOfTheDay.explanation}</p>
            </div>
            
             

        </div>
    )
}

export default Home