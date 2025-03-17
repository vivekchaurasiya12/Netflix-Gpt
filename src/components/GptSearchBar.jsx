import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import useGeminiApi from "../hooks/useGeminiApi";
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false); 
  const searchMovie = useSearchMovie(); 
  const handleGeminiSearchClick = useGeminiApi(searchText, searchMovie); // 

  const handleSearchClick = async () => {
    setLoading(true); 
    searchText.current.value = "";
    await handleGeminiSearchClick();
    setLoading(false);
  };


  return (
    <div className="flex justify-center pt-16 sm:pt-24">
    <form
      className="w-11/12 sm:w-1/2 bg-black grid grid-cols-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
        className="col-span-9 p-2 m-2 text-sm sm:text-base"
        disabled={loading} 
      />
      <button
        className="bg-red-600 text-white p-2 rounded-md col-span-3 m-2 px-2 py-2 text-sm sm:text-base"
        onClick={handleSearchClick}
        disabled={loading} 
      >
         {loading ? "Loading..." : lang[langKey].search}
      </button>
    </form>
  </div>
  );
};

export default GptSearchBar;



