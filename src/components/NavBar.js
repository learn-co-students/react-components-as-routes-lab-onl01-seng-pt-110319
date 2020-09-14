import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '80px',
  padding: '1px',
  margin: '0px 3px 3px',
  background: 'darkblue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/" exact style={link} activeStyle={{background: "navy"}}>Home</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={{background: "navy"}}>Movies</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={{background: "navy"}}>Directors</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={{background: "navy"}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
