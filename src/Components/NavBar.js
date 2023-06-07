import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container-fluid navbar_toggle'>
      <nav className={`navbar navbar-expand-lg navbar-light ${isMenuOpen ? 'active' : ''}`}>
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand logo mx-2">
            <img src='./logo.svg' alt="Logo" />
          </NavLink>
          <button
            className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link mx-3" activeClassName="active">
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
