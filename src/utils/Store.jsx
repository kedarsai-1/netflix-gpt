import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice.jsx";
import  moviesReducer from './movieSlice.jsx';
import gptReducer from "./gptSlice.jsx"
import configReducer from './configSlice.jsx'
const Store = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer
        }
    }
)
export default Store ;