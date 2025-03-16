import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    if(!posterPath) return null;
    return (
        <div>
        <img src={IMAGE_CDN_URL + posterPath } alt="movie poster"  className="w-28 h-40 sm:w-40 sm:h-56 object-cover"/>
        </div>
    );
}
export default MovieCard; 