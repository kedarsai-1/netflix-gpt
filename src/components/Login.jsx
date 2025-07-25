import Header from "./Header";
import {useRef, useState} from 'react'
import {ValidateData} from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BG_URL } from "../utils/constants";

const Login = ()=>{
    const dispatch = useDispatch();
    const [isSignInForm,setisSignInForm] = useState(true);
    const [errorMessage,seterrorMessage]=useState(null);
    const toggleSignInForm =()=>{
        setisSignInForm(!isSignInForm)
    }
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const handlebuttonClick =()=>{
        console.log(email.current.value)
        console.log(password.current.value)
      const message =  ValidateData(email.current.value,password.current.value)
        seterrorMessage(message)
        if(message) return
        //sign in /sign up
        if(!isSignInForm){
            //signup
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
        displayName: name.current.value, photoURL: AVATAR_URL
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid: uid,email: email,displayname: displayName,photoURL:photoURL}))
        // Profile updated!
        navigate("/browse")
      }).catch((error) => {
        // An error occurred
        seterrorMessage(errorCode+ ''+ errorMessage)
      });
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+""+errorMessage);
    // ..
  });
        }
        else{
            //signin
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode +""+ errorMessage)
  });
        }
        
    }
    return(
        <div>
            
            <Header/>
            <div className="absolute">
            <img className="h-screen object-cover w-screen"src ={BG_URL} />
        </div>
        <form onSubmit={(e)=>e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80  ">
        <h1 className="font-bold text-2xl">{isSignInForm?"Sign In":"Sign up"}</h1>
        {!isSignInForm &&(
            <input ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 text-white bg-gray-600"/>
        )}
            <input 
            ref={email} 
            type ="text"
             placeholder="Email Address"
              className="p-4 m-4 text-white bg-gray-600"/>
        
            <input 
            ref={password}
            type ="password" 
            placeholder="Password"
             className="p-4 m-4 text-white bg-gray-600"/>
             <p className="text-red-500 font-bold p-4">{errorMessage}</p>
            <button className ='p-4 m-4 bg-red-600  md:w-full rounded-lg cursor-pointer'
            onClick={handlebuttonClick}>
                {isSignInForm?"Sign In":"Sign up"} </button>
            <p className="py-4 text-sm cursor-pointer"
            onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now":"Already Registered? Sign in now"}</p>
        </form>
       
        </div>
    )
}
export default Login;