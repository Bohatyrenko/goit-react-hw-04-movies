import { Component } from 'react';
import { getFilmById } from '../services/fetchApi';

class MovieDetailsPage extends Component {
  state = {
    film: {},
    from: '',
  };

  async componentDidMount() {
    const id = this.props.location.state.id;
    const response = await getFilmById(id);
    this.setState({ film: response.data });
    console.log('MovieDetailsPage', this.props);
  }

  handleGoBack = () => {
    this.props.history.push(this.props.location.state.from);
  };
  render() {
    const { film } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <h1>{film.title}</h1>
        <p>{film.overview}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
