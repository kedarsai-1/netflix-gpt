import Header from "./Header";
import {useState} from 'react'

const Login = ()=>{
    const [isSignInForm,setisSignInForm] = useState(true);
    const toggleSignInForm =()=>{
        setisSignInForm(!isSignInForm)
    }
    return(
        <div>
            Login
            <Header/>
            <div>
            <img className="absolute"src ="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" />
        </div>
        <form 
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80  ">
        <h1 className="font-bold text-2xl">{isSignInForm?"Sign In":"Sign up"}</h1>
        {!isSignInForm &&(
            <input type="text"
            placeholder="Full Name"
            className="p-4 m-4 text-white bg-gray-600"/>
        )}
            <input type ="text"
             placeholder="Email Address"
              className="p-4 m-4 text-white bg-gray-600"/>
        
            <input type ="password" 
            placeholder="Password"
             className="p-4 m-4 text-white bg-gray-600"/>
            <button className ='p-4 m-4 bg-red-600 w-full rounded-lg'>
                {isSignInForm?"Sign In":"Sign up"}</button>
            <p className="py-4 text-sm cursor-pointer" 
            onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign up now":"Already Registered? Sign in now"}</p>
        </form>
       
        </div>
    )
}
export default Login;