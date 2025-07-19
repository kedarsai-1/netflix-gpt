import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath,onClick}) => {


  
 
  if(!posterPath)return null
  return (
    <div className=" w-36 md:w-40 pr-2" onClick={() => {
      console.log("MovieCard clicked");
      onClick()}}>
        
      <img
        className="w-full h-full object-cover rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110 cursor-pointer"
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
