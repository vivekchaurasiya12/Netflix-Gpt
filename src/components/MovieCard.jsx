import { IMAGE_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const MovieCard = ({posterPath,movieId})=>{
    if(!posterPath) return null;
    return (
        <Link to={`/movie/${movieId}`}>
        <div className="group relative overflow-hidden">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="movie poster"
        className="w-28 h-40 sm:w-40 sm:h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      
    </div>
    </Link>
    );
}
export default MovieCard; 