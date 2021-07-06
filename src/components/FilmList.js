import React from 'react';
import { NavLink } from 'react-router-dom';

const Filmlist = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={{ pathname: `/movies/${id}`, state: { id } }}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Filmlist;
