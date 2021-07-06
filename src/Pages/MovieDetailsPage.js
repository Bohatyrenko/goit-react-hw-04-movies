import { Component } from 'react';
import { getFilmById } from '../services/fetchApi';

class MovieDetailsPage extends Component {
  state = {
    film: {},
  };

  componentDidMount() {
    console.log(this.props);
    // const response = await getFilmById();
    // this.setState({ film: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return <h1>Movie Details Page, Hello</h1>;
  }
}

export default MovieDetailsPage;
