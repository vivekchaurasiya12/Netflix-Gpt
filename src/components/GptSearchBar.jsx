import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import useGeminiApi from "../hooks/useGeminiApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const searchMovie = useSearchMovie();
  const handleGeminiSearchClick = useGeminiApi(searchText, searchMovie);

  const handleSearchClick = async () => {
    const query = searchText.current.value.trim(); // Trim whitespace
    if (!query) {
      toast.error("Please enter a search query!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setLoading(true);
    searchText.current.value = "";
    await handleGeminiSearchClick();
    setLoading(false);
  };

  return (
    <div className="flex justify-center pt-20 sm:pt-24">
       <ToastContainer />
      {loading && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="loader border-t-4 border-red-600 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
      <form
        className={`w-11/12 sm:w-1/2 bg-black grid grid-cols-12 ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
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