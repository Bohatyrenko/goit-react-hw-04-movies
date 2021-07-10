import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './FilmList.module.css';

const Filmlist = ({ movies, history, query }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={s.filmsItem}>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              className={s.filmPoster}
            />
          )}
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: {
                id,
                from: history.location,
                query,
              },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Filmlist;
