import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { options } from '../utils/constants';

// fetch the data from tmdb api and store it in redux store
    // in browse page it increase the lenght so thats why we create a custom hooks to fetch the data here useNowPlayingMovies is custom hooks

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies);

   const getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    // console.log(json.results);
   }

    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies();
        //if nowplayingmovies is not null then we dont need to make a api call that is called memoization
        //means we are stopting the uneccessary api calling
    },[]);
}

export default useNowPlayingMovies;