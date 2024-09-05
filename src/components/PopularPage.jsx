import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";

const PopularPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const isLoading = !popularMovies || popularMovies.length === 0;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://movie-land-backend.onrender.com/popular"
        );
        setPopularMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Header />

      <div className="movie-container">
        <h1 className="popular-main-heading">
          {/* Popular */}
          {isLoading ? "Loading !!!" : "Popular"}
        </h1>
        <div className="movie">
          {popularMovies.map((movie) => (
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

export default PopularPage;
