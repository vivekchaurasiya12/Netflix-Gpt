 import { useEffect } from "react";
 import { options } from "../utils/constants";
 import { addTrailerVideo } from "../utils/moviesSlice";
 import { useDispatch, useSelector } from "react-redux";
 
 const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=> store.movies.trailerVideo);
    const getMovieVideo = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
      //  console.log(json); // Log the full API response
        const trailerlist = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerlist.length ? trailerlist[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };
      useEffect(() => {
      !trailerVideo &&  getMovieVideo();
      }, []);
 }
  
 

  export default useMovieTrailer;