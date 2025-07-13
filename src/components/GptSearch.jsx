import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
const GptSearch = ()=>{
    return(
        <div>
             <div className="absolute -z-10">
            <img src ={BG_URL} />
        </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
}
export default GptSearch