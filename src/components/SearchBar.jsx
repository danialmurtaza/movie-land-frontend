import React, { useContext } from 'react';
import {SearchContext} from '../context/searchContext';


const SearchBar = ({handleSearch, query, setQuery}) => {

    const {setSearchTerm} = useContext(SearchContext)

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            setSearchTerm(query)
            handleSearch()
        }
    }

    return(
        <div className="search-bar">
            <input className="input" type="text" placeholder="Search..." value={query} onKeyPress={(e) => handleKeyPress(e)} onChange={(e) => setQuery(e.target.value)}/>
            <button className="search-bar-btn" onClick={() => {
                setSearchTerm(query)
                handleSearch()
            }}>
              <i className="uil uil-search search-button-icon"></i> Search
            </button>

            <button className="search-bar-icon-btn" onClick={() => {
                setSearchTerm(query)
                handleSearch()
            }}>
              <i className="uil uil-search search-icon-button"></i>
            </button>
          </div>
    );
};

export default SearchBar;