import { getTrendingFilms } from '../../services/fetchApi';
import { Component } from 'react';

import FilmList from '../../components/FilmList/FilmList';

import s from './HomePage.module.css';

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
    return (
      <FilmList
        movies={movies}
        history={this.props.history.location}
        className={s.filmList}
      />
    );
  }
}

export default HomePage;
