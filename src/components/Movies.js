import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
         <h1>Movies Page</h1>
      {movies.map((movie, i) => (
        <div key={i}>
          <h2>{movie.title}</h2>
      <label><strong>Length:</strong> {movie.time} mins  |  <strong>Genres:</strong> {movie.genres.join(', ')}</label>
      <p><strong>Metascore:</strong> {!movie.metascore ? 'N/A' : movie.metascore}</p>
      {console.log(movie.genres)}
          {/* <ul>
            {movies.map((movie, i) =>
            <li key={i}>{movie}</li>
            )}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default Movies;
