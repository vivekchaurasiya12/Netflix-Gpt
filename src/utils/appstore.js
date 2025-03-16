import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt : gptReducer,
        config: configReducer,
    },

})
export default appStore;

// here we are importing the configureStore from redux toolkit
// we are importing the userReducer from userSlice
// we are creating a store using the configureStore method
// we are passing the userReducer to the store
// we are exporting the store
// this store will be used to maintain the state of the application and will be used to dispatch the actions
