import { options } from "../utils/constants";
const useSearchMovie = ()=>{
      const searchMovie = async(movie)=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,options);
    
        const json = await data.json();
    
        return json.results;
    
      }
      return searchMovie; 
}
export default useSearchMovie ;