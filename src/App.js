import React from 'react';
import Navigation from './component/navigation/navigation.component';
import MovieList from './component/movie-list/movie-list.component';
import Spinner from './component/spinner/spinner.component';
import {BrowserRouter as Router} from "react-router-dom";
import './App.scss';
import MovieProvider from "./context/MovieProvider.provider";

function App() {
  return (
      <MovieProvider>
          <Router>
              <div className="App">
                  <Navigation></Navigation>
                  <MovieList></MovieList>
                  <Spinner></Spinner>
              </div>
          </Router>
      </MovieProvider>
  );
}

export default App;
