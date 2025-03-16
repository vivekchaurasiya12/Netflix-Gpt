import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    return (
        <div>
        <img src={IMAGE_CDN_URL + posterPath } alt="movie poster"  className="w-40 h-56 object-cover"/>
        </div>
    );
}
export default MovieCard; 