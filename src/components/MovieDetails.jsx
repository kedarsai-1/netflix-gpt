import { API_OPTIONS } from "../utils/constants"
import { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
const MovieDetails=({id})=>{
    const [moviedetails, setMoviedetails] = useState(null);

    const movieDetails = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US',API_OPTIONS)
        const json = await data.json();
        console.log(json);
        setMoviedetails(json);

    }
    useEffect(()=>{
        movieDetails()
    },[id])
    if (!moviedetails) return <div className="text-white">Loading...</div>;


    return(
       
        <div className="bg-black/80 p-6 mt-6 rounded-lg text-white w-full md:w-3/4 shadow-2xl z-20">
      <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">{moviedetails.title}</h2>
      <p className="drop-shadow-md">{moviedetails.overview}</p>
      <h2 className="mt-2 text-sm text-white drop-shadow-md">Rating: {moviedetails.vote_average}</h2>
      <p className="text-sm text-white drop-shadow-md">Release Date: {moviedetails.release_date}</p>
      </div>
  
    )
}
export default MovieDetails