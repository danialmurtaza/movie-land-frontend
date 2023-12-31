import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';


const TrendingPage = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://movie-land-backend.onrender.com/trending');
                setTrendingMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    return(
        <>

        <Header />

        <div className='movie-container'>
            <h1 className='trending-main-heading'>Trending</h1>
            <div className='movie'>
                {trendingMovies.map((movie) => (
                    <div className='movie-details' key={movie.id}>
                       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                       <p className='movie-title'>{movie.title}</p>
                       <p className='movie-date-rating'>Released: {movie.release_date}</p> 
                       <p className='movie-date-rating'>Rating: {movie.vote_average}</p> 
                    </div>
                ))}
            </div>
        </div>

        </>
    );
};

export default TrendingPage;