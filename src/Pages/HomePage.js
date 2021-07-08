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
    const { movies } = this.state;
    return <FilmList movies={movies} history={this.props.history.location} />;
  }
}

export default HomePage;
