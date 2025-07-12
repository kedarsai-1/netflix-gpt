import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer =()=>{
    const movies = useSelector((store)=> store.movies?.addNowPlayingMovies); 
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);
    const {original_title,overview,id} = mainMovie; 
    return(
<>
<VideoTitle title ={original_title} overview={overview}/>
<VideoBackground id={id}/>

</>
    )
}
export default MainContainer;
