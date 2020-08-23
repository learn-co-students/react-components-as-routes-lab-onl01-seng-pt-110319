import React from 'react';
import { movies } from '../data';

const Movie = (movie) => {
  return (
    <div className="movie">
      <h2 className="title">Name: {movie.title}</h2>
      <span className="time">Time: {movie.time}</span>
      <br></br>
      <br></br>
      <span className="genres">Genres:</span>
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(Movie)}
    </div>
  );
};

export default Movies;
