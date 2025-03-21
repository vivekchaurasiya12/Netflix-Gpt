import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
   const movies = useSelector(store => store.movies?.nowPopularMovies);
 //console.log(movies);
  if(!movies) return;
   const mainMovies = movies[19];
 // console.log(mainMovies);
   const {original_title,overview,id} = mainMovies;
 // console.log(id);
  return (
    // This container have title and video of the movies as background
    <div className="w-full relative overflow-x-auto scrollbar-hide">
        <VideoTitle title={original_title} overview = {overview}/>
        <VideoBackground movieId={id}/>
    </div>
  );
};
export default MainContainer;






