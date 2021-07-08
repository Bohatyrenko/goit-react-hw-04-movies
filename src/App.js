import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './Pages/HomePage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import Navigation from './components/Navigation';
import MoviesPage from './Pages/MoviesPage';

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
