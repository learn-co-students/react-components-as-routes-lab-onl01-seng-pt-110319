import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to='/' className="navitem" activeStyle={{background: 'blue'}}>Home</NavLink>
      <NavLink exact to='/movies' className="navitem" activeStyle={{background: 'blue'}}>Movies</NavLink>
      <NavLink exact to='/actors' className="navitem" activeStyle={{background: 'blue'}}>Actors</NavLink>
      <NavLink exact to='/directors' className="navitem" activeStyle={{background: 'blue'}}>Directors</NavLink>
    </div>
  );
};

export default NavBar;
