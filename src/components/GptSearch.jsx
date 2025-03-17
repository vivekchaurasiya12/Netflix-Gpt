import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constants";
const GptSearch = () => {
    
    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-full -z-20">
                    <img
                      src={BACKGROUND_IMAGE}
                      alt="Netflix Background"
                      className="w-full min-h-screen object-cover"
                    />
                  </div>
       <GptSearchBar/>
       <GptMovieSuggestion/>
        </div>
    );
    }

    export default GptSearch;