import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { options } from '../utils/constants';

// fetch the data from tmdb api and store it in redux store
    // in browse page it increase the lenght so thats why we create a custom hooks to fetch the data here useNowPlayingMovies is custom hooks

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const nowPopularMovies = useSelector((store)=> store.movies.nowPopularMovies);
   const getPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    // console.log(json.results);
   }

    useEffect(()=>{
      !nowPopularMovies &&  getPopularMovies();
    },[]);
}

export default usePopularMovies;