import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container-fluid">
          <div className="row footer_info">
            <div className="col-md-6 footer_logo">
              <img src="./logo.svg"></img>
              <div className="hero_info">
                Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="menu ">
                <ul className="footer_menu d-flex nav-item">
                  <li class="nav-item">
                    <Link to="/home" class="nav-link active mx-3 ">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/recipes" class="nav-link  mx-3" href="#">
                      Recipes
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/blog" class="nav-link  mx-3 " href="#">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contact" class="nav-link  mx-3" href="#">
                      Contact
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/about" class="nav-link  mx-3" href="#">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="copy_right">
            <div className="year ">
              © 2020 Flowbase. Powered by{" "}
              <span className="text-danger ">Webflow</span>
            </div>
            <div className="social_icon d-flex ">
              <img src="./001-facebook.svg" alt="Facebook" ></img>
              <img src="./003-twitter.svg" alt="Twitter"></img>
              <img src="./004-instagram.svg" alt="Instagram"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
