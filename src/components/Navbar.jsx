import React, { useRef } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  return (
    <section id="main-section">
      <div className="main-container">
        <div className="container">
          <div className="logo">
            <img src="./images/ML logo 2.png" alt="logo" />
          </div>

          <nav ref={navRef}>
            <a href="/#">Action</a>
            <a href="/#">Crime</a>
            <a href="/#">Thriller</a>
            <a href="/#">Up Coming</a>

            <div className="nav-btn nav-close-btn" onClick={() => showNavbar()}>
              <FaTimes />
            </div>
          </nav>

          <div className="icons-div">
            {/* <button className="search-btn"> Sign Up</button> */}

            <div className="nav-btn nav-open-btn" onClick={() => showNavbar()}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>

      <div className="main-div">
        <p className="main-heading">Unlimited movies, TV shows, and more</p>
        <p className="sub-heading">"DIVE IN TO THE WORLD OF FILM"</p>

        <div className="search-bar">
          <input className="input" type="text" placeholder="Search..." />
          <button className="search-bar-btn">
            <i className="uil uil-search search-button-icon"></i> Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
