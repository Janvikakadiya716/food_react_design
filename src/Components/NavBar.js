import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink to="/home" className="navbar-brand logo mx-2">
            <img src='./logo.svg' alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/home" className="nav-link mx-3" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/recipes" className="nav-link mx-3">
                  Recipes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link mx-3">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link mx-3">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link mx-3">
                  About us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <img src="../001-facebook.svg" alt="Facebook" className="mx-3" />
              <img src="../003-twitter.svg" alt="Twitter" className="mx-3" />
              <img src="../004-instagram.svg" alt="Instagram" className="mx-3" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
