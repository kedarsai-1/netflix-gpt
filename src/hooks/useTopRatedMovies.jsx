import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies =()=>{
    const dispatch =  useDispatch();
    const TopRatedMovies = useSelector((store) =>store.movies.addTopRatedMovies)
    const getTopRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS) 
        const json = await data.json();
        console.log(json); 
        dispatch(addTopRatedMovies(json.results));
        }
   useEffect(()=>{
    !TopRatedMovies && 
    getTopRatedMovies();
   },[])
}
export default useTopRatedMovies;