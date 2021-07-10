import React, { Component } from 'react';

import { getFilmsByQuery } from '../../services/fetchApi';
import Filmlist from '../../components/FilmList/FilmList';

export class MoviesPage extends Component {
  state = {
    query: '',
    films: [],
  };

  async componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    if (searchParams.get('query')) {
      const response = await getFilmsByQuery(searchParams.get('query'));
      this.setState({ films: response.data.results });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    getFilmsByQuery(this.state.query).then(response => {
      this.setState({ films: response.data.results });
      this.onQueryChange();
    });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  onQueryChange = () => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `query=${this.state.query.trim()}`,
    });
  };

  render() {
    const { query, films } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={query} onChange={this.handleChange} />
          <button>Search</button>
        </form>
        <Filmlist movies={films} history={this.props.history} query={query} />
      </div>
    );
  }
}

export default MoviesPage;
