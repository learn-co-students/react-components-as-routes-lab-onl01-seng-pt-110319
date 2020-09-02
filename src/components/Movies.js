import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h3>{movie.title}</h3>
            <p><em>Runtime:</em> {movie.time} minutes </p>
            
            <h4>Genres:</h4>
            {movie.genres.map((genre,index) => (
              <ul key={index}>{genre}</ul>
            ))}  
           
            <br />
          </div>
        ))}
    </div>
  );
};

export default Movies;
