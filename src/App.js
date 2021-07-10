import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './Pages/HomePage/HomePage';
import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage';
import Navigation from './components/Navigation/Navigation';
import MoviesPage from './Pages/MoviesPage/MoviesPage';

import './styles.module.css';
import './components/FilmList/FilmList.module.css';
import './components/Navigation/Navigation.module.css';
import './Pages/HomePage/HomePage.module.css';
import './Pages/MovieDetailsPage/MovieDetailsPage.module.css';
import './Pages/MoviesPage/MoviesPage.module.css';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </>
  );
}

export default App;
