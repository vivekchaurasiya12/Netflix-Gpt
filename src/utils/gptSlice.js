import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch : false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
    }
})
export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;
// here we are importing the createSlice method from redux toolkit
// we are creating a slice using the createSlice method
// we are passing the name of the slice as 'gpt'
// we are passing the initial state of the slice as an object with a key showGptSearch and value as false
// we are passing the reducers object to the slice
// we are passing the toggleGptSearchView reducer to the slice
// we are exporting the toggleGptSearchView action
// we are exporting the gptSlice reducer