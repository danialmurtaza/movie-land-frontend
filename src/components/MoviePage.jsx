import React from "react";

const MoviePage = ({ movies }) => {
  const isLoading = !movies || movies.length === 0;

  return (
    <>
      <hr className="divider" />

      <div className="movie-container">
        {/* Conditionally render "Loading !!!" or Movies heading */}
        <h1 className="movie-main-heading">
          {/* Movies */}
          {isLoading ? "Loading !!!" : "Movies"}
        </h1>
        {/* Conditionally display movies or nothing if loading */}
        <div className="movie">
          {movies.map((movie) => (
            <div className="movie-details" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="movie-title">{movie.title}</p>
              <p className="movie-date-rating">
                Released: {movie.release_date}
              </p>
              <p className="movie-date-rating">Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviePage;
