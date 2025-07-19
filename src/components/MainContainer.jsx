import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import MovieDetails from "./MovieDetails";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  const selectedMovieId = useSelector((store) => store.movies?.selectedMovieId);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const selectedMovie = movies.find((m) => m.id === selectedMovieId);
  const movieToUse = selectedMovie || mainMovie;

  const { original_title, overview, id,vote_avearge,release_date } = movieToUse;

  return (
    <div className="pt-[30%] md:pt-0">
     
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />

      {selectedMovieId && (
        <div className="px-12 mt-8">
          <MovieDetails id={selectedMovieId} />
        </div>
      )}
    </div>
  );
};

export default MainContainer;