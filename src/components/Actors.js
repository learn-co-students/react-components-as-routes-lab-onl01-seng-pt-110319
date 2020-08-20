import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
      	<div className='actor'>
      		<h3>
      		Name: {actor.name}
      		</h3>
      		Movies:
      		<ul>
      			<li>{actor.movies[0]}</li>
      			<li>{actor.movies[1]}</li>
      			<li>{actor.movies[2]}</li>
      		</ul>
      	</div>
      	)}
    </div>
  );
};

export default Actors;
