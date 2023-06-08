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
       <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand logo mx-2">
            <img src='./logo.svg' alt="Logo" className='logo' />
          </NavLink>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink to="/recipes" className="nav-link">
                Recipes
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item  mx-2">
              <NavLink to="/about" className="nav-link">
                About us
              </NavLink>
            </li>
          </ul>
          <div className="social-icons">
  <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
    <img src="../001-facebook.svg" alt="Facebook" className="mx-3" />
  </a>
  <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
    <img src="../003-twitter.svg" alt="Twitter" className="mx-3" />
  </a>
  <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
    <img src="../004-instagram.svg" alt="Instagram" className="mx-3" />
  </a>
</div>

        </div>
      </nav>

      {/* Offcanvas menu */}
      <div className={`offcanvas offcanvas-start ${isMenuOpen ? 'show' : ''}`} tabIndex="-1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title"><img src='./logo.svg'></img></h5>
          <button type="button" className="btn-close text-reset" onClick={toggleMenu}></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recipes" className="nav-link" onClick={toggleMenu}>
                Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link" onClick={toggleMenu}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={toggleMenu}>
                About us
              </NavLink>
            </li>
          </ul>
          <div className="social-icons">
            <img src="../001-facebook.svg" alt="Facebook" className="mx-3" />
            <img src="../003-twitter.svg" alt="Twitter" className="mx-3" />
            <img src="../004-instagram.svg" alt="Instagram" className="mx-3" />
          </div>
        </div>
      </div>
      <nav className={`navbar navbar-light d-flex d-lg-none ${isMenuOpen ? 'active' : ''}`}>
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
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
