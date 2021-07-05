import { getTrendingFilms } from '../services/fetchApi';
import { Component } from 'react';

import FilmList from '../components/FilmList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await getTrendingFilms();
    this.setState({ movies: response.data.results });
  }

  render() {
    return <FilmList />;
  }
}

export default HomePage;
