import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const formattedMovies = movies.map(movie => {
    return(
      <div>
        <h3>{movie.title}</h3>
        <h4>Runtime: {movie.time} minutes</h4>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {formattedMovies}
    </div>
  );
};

export default Movies;
