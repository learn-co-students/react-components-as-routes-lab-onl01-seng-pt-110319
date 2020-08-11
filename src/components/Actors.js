import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
  {actors.map(actor => <div className='actor'>actor <p>{actor.name}</p> <ul>{actor.movies}</ul></div>)}

  {/* {actors.map(actor => console.log(actor.movies))} */}
    </div>
  );
};

export default Actors;
