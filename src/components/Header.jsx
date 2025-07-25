import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { clearGptMovieResult, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
    const handleSignOut =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.

          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    useEffect(()=>{
    const unsubscribe =   onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid: uid,email: email,displayname: displayName,photoURL:photoURL}))
          
              
            // ...
            navigate("/browse"); 
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        
            // ...
          }
        });
        //Unsubscribe when component unmounts
        return ()=>unsubscribe();
        

  }


,[])
const handleGptSearchClick = ()=>{
  dispatch(toggleGptSearchView())
  dispatch(clearGptMovieResult())
  
}

  const handleLanguageChange =(e)=>{
   dispatch(changeLanguage(e.target.value))
  


  }


    return(
        
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between ">
            <img className="w-40 mx-auto md:mx-0" src ={NETFLIX_LOGO}/>
        
       {user &&(<div className="flex p-2">
        {showGptSearch && (
        <select className="bg-gray-900 text-white p-2  " onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang =><option key = {lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        
        
        </select>
          )}
        <button className="py-2 px-4 mx-4 rounded-lg bg-pink-500 cursor-pointer"onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "GptSearch" }</button>
            <img className="w-12 h-12" src ={user.photoURL}/>
            <button className="font-bold text-white cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
          </div>

    )
}
export default Header;