import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
   const movies = useSelector(store => store.movies?.nowPlayingMovies);
   //console.log(movies);
  if(!movies) return;
   const mainMovies = movies[2];
  // console.log(mainMovies);
   const {original_title,overview,id} = mainMovies;
  //console.log(original_title);
  return (
    // This container have title and video of the movies as background
    <div>
        <VideoTitle title={original_title} overview = {overview}/>
        <VideoBackground movieId={id}/>
    </div>
  );
};
export default MainContainer;






