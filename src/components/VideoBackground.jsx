
import { useDispatch, useSelector } from "react-redux"

import useMovieTrailer from "../hooks/useMovieTrailer"
const VideoBackground =({id})=>{

    const trailerVideo = useSelector((store)=>store.movies.trailerVideo)
    useMovieTrailer(id)
    return(
        <div className="w-screen h-screen m-0 p-0 overflow-hidden">
            <iframe className="w-full h-full"
            src={"https://www.youtube.com/embed/LhRXf-yEQqA?si=yr6AsH2JeKLEKqik" + trailerVideo?.key + "?&autoplay=1&mute=1" }
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>

        </div>
    )
}
export default VideoBackground;