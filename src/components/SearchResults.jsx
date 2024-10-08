import React from "react";
import Loader from "./Loader";

const SearchResults = ({ movies }) => {
  const isLoading = !movies || movies.length === 0;

  return (
    <>
      <div className="movie-container">
        <h1 className="search-results-main-heading">
          Search Results
          {/* {isLoading ? "Loading !!!" : "Search Results"} */}
        </h1>
        {isLoading ? (
          <Loader />
        ) : (
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
                <p className="movie-date-rating">
                  Rating: {movie.vote_average}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
