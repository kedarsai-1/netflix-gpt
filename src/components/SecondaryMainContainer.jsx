import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MoveList";
import MovieDetails from "./MovieDetails";
import { useState } from "react";
import { SelectedMovieId } from "../utils/movieSlice";
const SecondaryContainer = ()=>{
    const movies = useSelector((store)=>store.movies);
   

   
    return(
        <div className= "bg-black" >
            <div className="mt-24 md:mt-32 pl-12 relative z-20 " >
        <MovieList title = {"Now Playing"} movies = {movies.addNowPlayingMovies} />
        <MovieList title = {"Top Rated"} movies = {movies.addTopRatedMovies}  />
        <MovieList title = {"Popular"} movies = {movies.addPopularMovies}  />
        <MovieList title = {"Upcoming Movies"} movies = {movies.addNowPlayingMovies}  />
       
        </div>
       
        </div>
            )
}
export default SecondaryContainer;