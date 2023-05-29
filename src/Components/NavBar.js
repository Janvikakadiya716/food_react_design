import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <div className='container-fluid'>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
   <img src='../logo.png' class="navbar-brand" href="#"></img>
   {/* <a class="navbar-brand" href="#">Foodieland.</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" class="nav-link mx-3 " >Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/recipes" class="nav-link  mx-3"  href="#">Recipes</Link>
      </li>
      <li class="nav-item">
          <Link to="/blog" class="nav-link  mx-3 "  href="#">Blog</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact"  class="nav-link  mx-3"  href="#">Contact</Link>
      </li>
      <li class="nav-item">
        <Link to="/about"  class="nav-link  mx-3" href="#">About us</Link>
      </li>
      </ul>
      <form class="d-flex">
       <img src='../001-facebook.png' class='mx-4'/>
       <img src='../003-twitter.png' class='mx-4'/>
       <img src='../004-instagram.png' class='mx-4'/>
      </form>
    </div>
  </div>
</nav>
        </div>
    </>
  )
}

export default NavBar;
