import Header from "./Header";
import React from "react";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = ()=>{
    //  we create a custom hooks to fetch the data here useNowPlayingMovies is custom hooks
    
   useNowPlayingMovies();

    return(
      <div className="browse">
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
    );
};
export default Browse;