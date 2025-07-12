import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryMainContainer";

const Browse=()=>{
   
 useNowPlayingMovies ()  ;
 usePopularMovies();
 useUpcomingMovies()
 useTopRatedMovies()
return(
  
    <div>
       <Header/>
       <MainContainer/>
       <SecondaryContainer/>
    </div>
)
    /*
    MainContainer
        -videoBackground
        -videoTitle
    SecondaryContainer
        -MovieList *n
        - cards *n 
    */

}
export default Browse;