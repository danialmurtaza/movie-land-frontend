import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({maincontainer = ''}) => {
    const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");

  };

    return(
        <div className={`${maincontainer} nav-container`}>
        
        <div className="container">

          <div className="logo">
            <img src="./images/ML logo.png" alt="logo" />
          </div>

          <nav ref={navRef}>
            <a href="/#"><Link to="/home">Home</Link></a>
            <a href="/#"><Link to="/trending">Trending</Link></a>
            <a href="/#"><Link to="/popular">Popular</Link></a>
            <a href="/#"><Link to="/toprated">Top Rated</Link></a>
            <a href="/#"><Link to="/upcoming">Up Coming</Link></a>

            <div className="nav-btn nav-close-btn" onClick={() => showNavbar()}>
              <FaTimes />
            </div>
          </nav>

          <div className="icons-div">

            <button className="search-btn"> Sign Up</button>

            <div className="nav-btn nav-open-btn" onClick={() => showNavbar()}>
              <FaBars />
            </div>
          </div>
        </div>

      </div>
    );
};

export default Header;