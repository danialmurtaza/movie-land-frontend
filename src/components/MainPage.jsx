import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import SearchBar from "./SearchBar";
import Header from "./Header";


const Navbar = () => {

  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSearchResults = (results) => {
    navigate('/searched')

  };

  return (
    <section id="main-section">
      <Header maincontainer="main-container"/>

      <div className="main-div">

          <p className="main-heading">Unlimited movies, TV shows, and more</p>
          <p className="sub-heading">"DIVE IN TO THE WORLD OF FILM"</p>

          <SearchBar handleSearch={handleSearchResults} query={query} setQuery={setQuery}/>

      </div>
    </section>
  );
};

export default Navbar;