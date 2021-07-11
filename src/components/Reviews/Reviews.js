import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getReviewsInfo } from '../../services/fetchApi';

const Reviews = ({ match }) => {
  const history = useHistory();
  console.log('history', history);
  const [reviews, setReviews] = useState([]);
  console.log('reviews', reviews);
  useEffect(() => {
    getReviewsInfo(match.params.id).then(response =>
      setReviews(response.data.results),
    );
  }, [match.params.id]);
  return (
    <>
      <h1>Reviews</h1>npm
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, created_at, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
              <time>{created_at}</time>
            </li>
          ))
        ) : (
          <li>
            <p>Sorry, but there is no information about reviews in this film</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default Reviews;
