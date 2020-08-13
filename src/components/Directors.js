import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((direct, i)=>(
        <div key={i}>
          <h3>Name: {direct.name}</h3>
          <p>Movies:</p>
          <ul>
            {direct.movies.map((movie, i)=>(
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
