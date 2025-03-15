
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { options } from '../utils/constants';

// fetch the data from tmdb api and store it in redux store
    // in browse page it increase the lenght so thats why we create a custom hooks to fetch the data here useNowPlayingMovies is custom hooks

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
   const getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    // console.log(json.results);
   }

    useEffect(()=>{
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;