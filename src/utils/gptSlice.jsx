import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptSearch: false,
    movieNames:null,
    movieResults:null
  },
  reducers:{
    toggleGptSearchView :(state,action)=>{
        state.showGptSearch =!state.showGptSearch;

    },
    addGptMovieResult:(state,action)=>{
      const {movieNames,movieResults} = action.payload
      state.movieNames = movieNames
      state.movieResults =movieResults
    },
    clearGptMovieResult:(state,action)=>{
      state.movieNames.length = []
      state.movieResults.length = []
    }

  }
})
export const{toggleGptSearchView,addGptMovieResult,clearGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;