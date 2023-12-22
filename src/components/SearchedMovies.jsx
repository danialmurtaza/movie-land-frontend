import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import {SearchContext} from '../context/searchContext';
import Header from './Header';
import SearchResults from './SearchResults';

const SearchedMovies = () => {
    const {searchTerm} = useContext(SearchContext)
    const [movies, setMovies] = useState([]);

    console.log(searchTerm);
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.post('https://movie-land-backend.onrender.com/search', { searchTerm });
                setMovies(response.data);
            } catch (error) {
                console.log('Error Searching', error);
            }
        };
        fetchMovies();
    }, [searchTerm]);

    return(
        <>
        <Header />
        <SearchResults movies={movies} />
        </>
    );
};

export default SearchedMovies;