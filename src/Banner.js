
import React,{useState,useEffect} from 'react'
import axios from "./axioss"
import requests from "./requests"
import "./banner.css"

const Banner = () => {
    const [movie,SetMovie]= useState([]);

const fetchData= async()=>{
    const request= await axios.get(requests.fetchNetflixOriginals);

    SetMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    
}

useEffect(()=>{
fetchData();
},[])
 function truncate(str,n) {
    return str?.length > n ?str.substr(0,n-1) + "..." : str;
}
    return (
        <header>
            <div className="Banner" style={{ backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
        backgroundSize:"cover",backgroundPosition:"center center"  }} >
          <div className="Banner_content">
            <h1 className="Banner_title"> {movie?.title || movie?.name || movie?.original_name}</h1>
              <button className="buttons">Play</button>
              <button className="buttons">My List</button>
             <p className="description">{truncate(movie?.overview,150)}</p>
              </div>  
              <div className="banner-fade">
                  </div>  
        </div>
        </header>
    )
}

export default Banner
