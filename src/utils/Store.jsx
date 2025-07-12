import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice.jsx";
import  moviesReducer from './movieSlice.jsx';
const Store = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer
        }
    }
)
export default Store ;