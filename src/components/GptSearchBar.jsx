import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageconstants";
import { use, useRef } from "react";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = ()=>{
    const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null)
    //movie seach in tmdb
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch( `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS)
        const json = await data.json()
        return json.results; 
    }
    
    const handleGptSearchClick = async ()=>{
        console.log(searchText.current.value);

        //make an api call to gpt api and get movie results
        const Query = "Act as a Movie Recommendation Syatem and suggest some movies for the query" + searchText.current.value +" only give me names of 5 movies, coma separated like the exampl result given ahead. Example Result: Thandel,Don,Dochey,Golmal,Coolie" ;
        const Results = await gemini.models.generateContent({
           model: "gemini-2.5-flash",
           contents: Query,
          });
          console.log(Results.text);
          if (!Results.text){
            console.log("sorry 😔")
          }
          const movies = Results.text.split(","); 
          console.log(movies)
          const promiseArray = movies.map(movie=>searchMovieTMDB(movie));
          //[promise1 to 5]
          const tmdbResults = await Promise.all(promiseArray);
          console.log(tmdbResults)
          dispatch(addGptMovieResult({movieNames:movies ,movieResults:tmdbResults}))
          
   
    }
   
    return(
        <div className="py-[10%] flex justify-center">
            <form className=" w-1/2 bg-black" onSubmit={(e)=>{e.preventDefault()}}>
            <input 
            ref={searchText} 
            type = "text"
             className=" p-4 m-4 col-span-4 w-120 bg-white"
              placeholder ={lang[langKey]. GptSearchPlaceholder} />
            <button  
            className= "col-span-3 mx-10 py-2 px-6 bg-red-500 text-white rounded-lg"
             onClick={handleGptSearchClick}>
                {lang[langKey].search}</button>
        </form>
        </div>
    ) 
}
export default GptSearchBar;