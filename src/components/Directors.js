import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => 
      <div className='director'>
      		<h3>
      			Name: {director.name}
      		</h3>
      		
      		Movies: 
      		<ul>
      			<li>{director.movies[0]}</li>
      			<li>{director.movies[1]}</li>
      			<li>{director.movies[2]}</li>
      		</ul>
      </div>
      )}
    </div>
  );
}

export default Directors
