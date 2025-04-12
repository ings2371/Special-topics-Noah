import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/#" className="navbar-brand d-flex align-items-center">
          <strong>YGO Card Collect</strong>
        </a>
       

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/AddCard">Add new Card</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
 
export default NavBar;