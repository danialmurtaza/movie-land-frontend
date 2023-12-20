import React from 'react';

const MoviePage = ({movies}) => {
    return(
        <>

        <hr className="divider" />

        <div className='movie-container'>
            <h1 className='movie-main-heading'>Movies</h1>
            <div className='movie'>
                {movies.map((movie) => (
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

export default MoviePage;