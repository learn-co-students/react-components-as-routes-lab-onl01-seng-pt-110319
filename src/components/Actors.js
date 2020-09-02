import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const formattedActors = actors.map(actor => {
    return(
      <div>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>  
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {formattedActors}
    </div>
  );
};

export default Actors;
