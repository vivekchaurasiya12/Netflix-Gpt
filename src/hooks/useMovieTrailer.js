 import { useEffect } from "react";
 import { options } from "../utils/constants";
 import { addTrailerVideo } from "../utils/moviesSlice";
 import { useDispatch, useSelector } from "react-redux";
 
 const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=> store.movies.trailerVideo);
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        const json = await data.json();
        const trailerlist = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerlist.length  ?  trailerlist[0] : json.results[0];
         dispatch(addTrailerVideo(trailer));  
      };
      useEffect(() => {
      !trailerVideo &&  getMovieVideo();
      }, []);
 }
  
 

  export default useMovieTrailer;