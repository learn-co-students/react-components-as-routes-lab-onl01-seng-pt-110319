import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
  {/* {directors.map(director => <div>director <p>{director.name}</p> <ul>{director.movies}</ul></div> )} */}
  {directors.map((director, index) => (
    <div key={index}>
    <h2>{director.name}</h2>
    <ul>
      {director.movies}
    </ul>

    </div>
  ))}
    </div>
  );
}

export default Directors
