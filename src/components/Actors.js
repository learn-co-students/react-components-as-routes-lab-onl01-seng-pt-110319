import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <div key={index}>
            <h3>Name: {actor.name}</h3>
            <b>Movies: </b>
            <ul>
              {actor.movies.map((movie,index) => (
                <ul key={index}>{movie}</ul>
              ))}
            </ul>
          </div>
         ))}
    </div>
  );
};

export default Actors;
