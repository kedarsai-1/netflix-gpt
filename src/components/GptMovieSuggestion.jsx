import { useSelector } from "react-redux";
import MovieList from "./MoveList";
import Shimmer from "./Shimmer";
import ShimmerCardList from "./ShimmerCardList";

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return(
        <div className="p-4 m-4 bg-black text-white flex flex-wrap ">
          <ShimmerCardList/>

        </div>
    )
    return (
        <div className="p-4 m-4 bg-black text-white">
            <div>
                {movieNames.map((movieName, index) => (
                    <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
                ))}
            </div>
        </div>
    );
};
export default GptMovieSuggestion;

