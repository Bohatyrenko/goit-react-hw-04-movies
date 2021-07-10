import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { getFilmById } from '../../services/fetchApi';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

import '../../components/Cast/Cast.module.css';
import '../../components/Reviews/Reviews.module.css';

class MovieDetailsPage extends Component {
  state = {
    film: {},
  };

  async componentDidMount() {
    console.log('props', this.props);
    const id = this.props.match.params.id;
    const response = await getFilmById(id);
    this.setState({ film: response.data });
    console.log('response', response);
  }

  handleGoBack = () => {
    this.props.history.push(this.props.location?.state?.from || '/');
  };

  render() {
    const { title, overview, poster_path } = this.state.film;
    const { url, path } = this.props.match;
    const review = this.props;
    console.log('review', review);

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <h1>{title}</h1>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        )}
        <p>{overview}</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: this.props.location.state,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            {review.lenght > 0 && (
              <Link
                to={{
                  pathname: `${url}/reviews`,
                  state: this.props.location.state,
                }}
              >
                Reviews
              </Link>
            )}
          </li>
        </ul>
        <Route path={`${path}/cast`} component={Cast} />
        {review.lenght > 0 && (
          <Route path={`${path}/reviews`} component={Reviews} />
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
