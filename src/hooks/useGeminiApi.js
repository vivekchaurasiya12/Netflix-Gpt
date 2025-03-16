import { useDispatch } from "react-redux";
import { GEN_API } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";



const useGeminiApi  = (searchText, searchMovie)=>{
    const dispatch  = useDispatch();

     const handleGeminiSearchClick = async () => {
       
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEN_API}`;
    
        const prompt = `Act as a movie recommender system and recommend me 5 movies based on the following: ${searchText.current.value}. Only give me 5 movie names, comma separated. Example: Golmaal, 3 Idiots, Sholay, DDLJ, Don`;
    
        const body = {
          contents: [{ parts: [{ text: prompt }] }],
        };
    
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
    
          const data = await response.json();
    
          if (data.candidates && data.candidates[0]) {
            const movieList = data.candidates[0].content.parts[0].text.split(",").map(movie => movie.trim()); 
            console.log(movieList);
            //split will make the string into array of strings based on the comma
    // for this movie list we search the movie from the tmdb api we will use the search api of tmdb to search the movie
          const promiseArray = movieList.map(movie=>searchMovie(movie)); // its a async function and it have 5 promises so we need to wait for all the promises to resolve so we use promise.all
          const tmdbMovies = await Promise.all(promiseArray);
          dispatch(addGptMovieResults({movieName: movieList, gptMovieResults: tmdbMovies}))
        //   console.log(tmdbMovies);
         
          } else {
            console.error("No valid response from Gemini API", data);
          }
        } catch (error) {
          console.error("Error fetching Gemini API:", error);
        }
      };
      return handleGeminiSearchClick;
}

export default useGeminiApi;