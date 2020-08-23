import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li key="home"><NavLink to="/">Home</NavLink></li>
        <li key="movies"><NavLink to="/movies">Movies</NavLink></li>
        <li key="actors"><NavLink to="/actors">Actors</NavLink></li>
        <li key="directors"><NavLink to="/directors">Directors</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
