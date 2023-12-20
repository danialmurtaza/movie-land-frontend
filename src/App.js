import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes} from 'react-router';
import './App.css';
import HomeContainer from './components/HomeContainer';
import TrendingPage from './components/TrendingPage';
import PopularPage from './components/PopularPage';
import TopRatedPage from './components/TopRatedPage';
import UpComingPage from './components/UpComingPage';
import SearchedMovies from './components/SearchedMovies';
import { SearchContextProvider } from './context/searchContext';

function App() {
  return (
    <>
    <Router>
      <SearchContextProvider>
      <Routes>
        <Route exact path='/' Component={HomeContainer} />
        <Route exact path='/home' Component={HomeContainer} />
        <Route exact path='/trending' Component={TrendingPage} />
        <Route exact path='/popular' Component={PopularPage} />
        <Route exact path='/toprated' Component={TopRatedPage} />
        <Route exact path='/upcoming' Component={UpComingPage} />
        <Route exact path='/searched' Component={SearchedMovies} />
      </Routes>
      </SearchContextProvider>
    </Router>
    </>
    
  );
}

export default App;
