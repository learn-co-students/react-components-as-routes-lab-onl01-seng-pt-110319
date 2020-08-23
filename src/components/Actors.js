import React from 'react';
import { actors } from '../data';

const Actor = (actor) => {
  return (
    <div className="actor" key={actor.name}>
      <h2>Name: {actor.name}</h2>
      <span>Movies:</span>
      <ul>
        {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

export default Actors;
