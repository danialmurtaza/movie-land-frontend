import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <p className="loading-title">Loading...</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
