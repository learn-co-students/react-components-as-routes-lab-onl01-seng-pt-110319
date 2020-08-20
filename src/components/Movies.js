import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>

        {movies.map(movie => 
        	<div className='movie'>
        	<h3>Name: {movie.title}</h3>
        	Time: {movie.time}
        	<br/>
        	<br/>
        	Genres: 
        		<ul>
        			<li>{movie.genres[0]}</li>
        			<li>{movie.genres[1]}</li>
        			<li>{movie.genres[2]}</li>
        			<li>{movie.genres[3]}</li>
        			<li>{movie.genres[4]}</li>
        		</ul>
        </div>
        )}
    </div>
  );
};

export default Movies;
