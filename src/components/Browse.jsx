import Header from "./Header";
import React from "react";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = ()=>{
    const showGptSearch = useSelector((state)=>state.gpt.showGptSearch);

    //  we create a custom hooks to fetch the data here useNowPlayingMovies is custom hooks 
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
    return(
      <div className="browse">
      <Header/>
      {showGptSearch ? (<GptSearch/>) :  
        (<>
        <MainContainer/>
        <SecondaryContainer/>
        </>)
        }
     
      
      </div>
    );
};
export default Browse;