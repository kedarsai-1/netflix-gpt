import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";


const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
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
    return(
        
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <img className="w-40" src ={NETFLIX_LOGO}/>
        
       {user &&(<div className="flex p-2">
            <img className="w-12 h-12" src ={user.photoURL}/>
            <button className="font-bold text-white cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
          </div>

    )
}
export default Header;