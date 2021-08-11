
import React,{useState,useEffect} from 'react';
import  "./Style.css"
import axios from './axioss';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
const base_url="https://image.tmdb.org/t/p/original";
const Row = ({title,fetchUrl,isLargeRow}) => {
   
const[movies,SetMovies]=useState([]);
const[trailerUrl,SetTrailerUrl]=useState("");
const  fetchData= async ()=>{
    const request=await axios.get(fetchUrl);
    SetMovies(request.data.results)
    
    return request;   
}
const handleClick=(movie)=>{
    if(trailerUrl){
        SetTrailerUrl("");
    }else{
        movieTrailer(movie?.name||" ")
        .then(url=>{
       const urlParams=new URLSearchParams(new URL(url).search)
       SetTrailerUrl(urlParams.get("v"));

        })
        .catch((error)=>error)
    }
}

useEffect(()=>{
    fetchData();
},[fetchUrl]);

const opts={height:"390",width:"100%",
playerVars:{autoplay:1},}

    return (
        <div className="row">
           <h2>{title}</h2> 
           <div className="poster">
               {movies.map(movie=>(
                  
                   <img
                     key={movie.id} 
                     onClick={()=>handleClick(movie)}
                     src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} 
                     alt={movie.title}
                     title={movie.title}
                     className={`poster_img ${isLargeRow && "poster_largeimg"}`}/>
                   
               ))}
           </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
