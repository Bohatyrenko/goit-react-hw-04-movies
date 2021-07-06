import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from './Pages/HomePage';
import MovieDetailsPage from './Pages/MovieDetailsPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
      </Switch>
    </>
  );
}

export default App;
