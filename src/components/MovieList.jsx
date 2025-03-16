import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
   //console.log(movies);
   if (!movies || movies.length === 0) return null;
  return (
   <div className="py-2 px-4">
     <h1 className="text-xl font-semibold py-2 text-white"> {title} </h1>
     <div className="relative w-full overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[160px]">
            <MovieCard posterPath={movie.backdrop_path || movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}
export default MovieList;