
import { useDispatch, useSelector } from "react-redux"

import useMovieTrailer from "../hooks/useMovieTrailer"
const VideoBackground =({id})=>{

    const trailerVideo = useSelector((store)=>store.movies.addTrailerVideo)
    useMovieTrailer(id)
    return(
        <div className="w-screen h-screen m-0 p-0 overflow-hidden relative">
            <iframe className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=yr6AsH2JeKLEKqik?&autoplay=1&mute=1` }
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
            {/* Stronger and wider gradient overlay for better readability on the left side */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
        </div>
    )
}
export default VideoBackground;