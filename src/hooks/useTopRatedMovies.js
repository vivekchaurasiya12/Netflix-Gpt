import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { options } from '../utils/constants';

// fetch the data from tmdb api and store it in redux store
    // in browse page it increase the lenght so thats why we create a custom hooks to fetch the data here useNowPlayingMovies is custom hooks

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const nowTopRatedMovies = useSelector((store)=> store.movies.nowTopRatedMovies);
   const getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
    // console.log(json.results);
   }

    useEffect(()=>{
       !nowTopRatedMovies && getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;