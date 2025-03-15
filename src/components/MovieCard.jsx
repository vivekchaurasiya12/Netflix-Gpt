import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    return (
        <div>
        <img src={IMAGE_CDN_URL + posterPath } alt="movie poster"  className="w-40 h-56"/>
        </div>
    );
}
export default MovieCard; 