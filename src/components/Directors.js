import React from 'react';
import { directors } from '../data';

const Director = (director) => {
  return (
    <div className="director">
      <h2>Name: {director.name}</h2>
      <span>Movies:</span>
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(Director)}
    </div>
  );
}

export default Directors
