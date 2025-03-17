import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
      const movies = useSelector(store=>store.gpt);
      const {movieName,gptMovieResults} = movies;
     // console.log(gptMovieResults);
      if(!movieName) return null;

    return (
        <div className="bg-black z-50 mt-4 px-4">
        {movieName.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={gptMovieResults[index]}
          />
        ))}
      </div>
      
    );
}
export default GptMovieSuggestion;