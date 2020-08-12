import React from 'react';
import { movies } from '../data';


// NEED TO ITERATE WITH INDEX LIKE IN THE TEST. -> 
const Movies = () => {
  return (
    <div>
     <h1>Movies Page</h1>
  {/* {movies.map((movie, index)=>  <div key={index}> movie <p>{movie.title}</p> <p>{movie.time}</p> <ul>{movie.genres}</ul></div>) }  */}
  {movies.map((movie, index) => (
    <div key={index}> 
    <h4>{movie.title}</h4>
  <p>{movie.time}</p>
    <ul>
      {movie.genres}
    </ul>
    </div>
  ))}
    </div>
  );
};

export default Movies;


// (<p className="review" >
//                 {review}
//             </p>))}