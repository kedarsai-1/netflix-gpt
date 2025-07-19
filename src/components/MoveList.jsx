import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { SelectedMovieId } from "../utils/movieSlice";

const MovieList = ({ title, movies}) => {
        const dispatch = useDispatch();

        const handleMovieClick = (id) => {
            console.log("Clicked movie ID:", id);
            dispatch(SelectedMovieId(id));
          };
      

    return (
        <div className="px-6" >
            <h1 className="text-lg md:text-4xl text-white py-4" >{title}</h1>
            <div className="flex overflow-x-scroll ">
                <div className="flex" >
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} id ={movie.id}   onClick={() => handleMovieClick(movie.id)}  />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MovieList;