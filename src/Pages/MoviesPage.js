import React, { Component } from 'react';

import { getFilmsByQuery } from '../services/fetchApi';
import Filmlist from '../components/FilmList';

export class MoviesPage extends Component {
  state = {
    query: '',
    films: [],
  };

  async componentDidMount() {
    if (this.props.location.state !== null) {
      const response = await getFilmsByQuery(this.props.location.state.query);
      console.log('stateQuery', this.props.location.state.query.query);
      console.log('response', response);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await getFilmsByQuery(this.state.query);
    console.log(response);
    this.setState({ films: response.data.results });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    const { query, films } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={query} onChange={this.handleChange} />
          <button>Search</button>
        </form>
        <Filmlist movies={films} history={this.props.history} />
      </div>
    );
  }
}

export default MoviesPage;
