import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
const GptSearch = ()=>{
    return(
       <>
             <div className="fixed -z-10">
            <img className="h-screen object-cover w-screen" src ={BG_URL} />
        </div>
         <div className="" >
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
        </>
    )
}
export default GptSearch