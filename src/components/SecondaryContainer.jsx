import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  //console.log(movies);
  return (
    <div className="bg-black">
  <div className=" sm:-mt-32 px-2 sm:px-4 relative z-10">
    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
    <MovieList title={"Popular"} movies={movies?.nowPopularMovies} />
    <MovieList title={"Top Rated"} movies={movies?.nowTopRatedMovies} />
    <MovieList title={"Upcoming"} movies={movies?.nowUpcomingMovies} />
  </div>
</div>
  );
};
export default SecondaryContainer;