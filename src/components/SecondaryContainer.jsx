import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  //console.log(movies);
  return (
    <div className=" bg-black">
      <div className="-mt-44 px-4 relative z-10">
      <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies = {movies?.nowPopularMovies} />
      <MovieList title={"Top Rated"} movies = {movies?.nowTopRatedMovies} />
      <MovieList title={"Upcoming"} movies = {movies?.nowUpcomingMovies} />
      {/* <MovieList title={"Romantic"} movies = {movies?.nowPlayingMovies} /> */}
      </div>
    </div>
  );
};
export default SecondaryContainer;