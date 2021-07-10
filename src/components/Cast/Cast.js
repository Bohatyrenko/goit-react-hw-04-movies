import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCastInfo } from '../../services/fetchApi';

const Cast = ({ match }) => {
  const history = useHistory();
  console.log('history', history);
  const [cast, setCast] = useState([]);
  console.log('cast', cast);
  useEffect(() => {
    getCastInfo(match.params.id).then(response => setCast(response.data.cast));
  }, [match.params.id]);
  return (
    <>
      {cast.length > 0 && <h1>Cast</h1>}
      <ul>
        {cast.length > 0 ? (
          cast.map(({ name, id, profile_path, title }) => (
            <li key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={title}
                />
              )}
              <h2>{name}</h2>
            </li>
          ))
        ) : (
          <li>
            <p>Sorry, but there is no information about cast in this film</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default Cast;
