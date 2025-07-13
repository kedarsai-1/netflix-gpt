import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryMainContainer";
import {useSelector} from 'react-redux'

const Browse=()=>{

    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
   
 useNowPlayingMovies ()  ;
 usePopularMovies();
 useUpcomingMovies()
 useTopRatedMovies()
return(
  
    <div>
       <Header/>
       {
        showGptSearch ? ( 
            <div>
            <GptSearch/>
            </div>):
            (  <div>
                <MainContainer/> 
                <SecondaryContainer/> 
                </div>
                
            )
       }
     
   
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