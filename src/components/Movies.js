import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  return (
    <div>
     <h1>Movies Page</h1>
     {movies.map((movie, index)=>(
        <div className="movie" key={index}>
          {movie.title} at {movie.time}
          <ul>
            {movie.genres.map((genre, idex)=>(
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
