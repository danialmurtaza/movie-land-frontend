import React, {useEffect, useState} from 'react';
import MainPage from './MainPage';
import TvAnimationPage from './TvAnimationPage';
import MoviePage from './MoviePage';
import axios from 'axios';


const HomeContainer = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tmdb');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    return(
        <>
        <MainPage />
        <TvAnimationPage />
        <MoviePage movies={movies}/>
        </>
    );
};

export default HomeContainer;