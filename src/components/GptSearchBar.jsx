import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import useGeminiApi from "../hooks/useGeminiApi";
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
 
  const searchMovie = useSearchMovie(); // Assuming this returns searchMovie function
  const handleGeminiSearchClick = useGeminiApi(searchText, searchMovie); // Pass searchText & searchMovie here


  return (
    <div className="flex justify-center pt-24">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-9 p-2 m-2"
        />
        <button
          className="bg-red-600 text-white p-2 rounded-md col-span-3 m-2 px-2 py-2"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;



