import React from 'react';
import { NavLink } from 'react-router-dom';

const Filmlist = ({ movies, history }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              // в нижней строчке дописать после id, "from: history.location.pathname" для того чтоб работала кнопка Go back
              state: { id, from: history.location.pathname },
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
