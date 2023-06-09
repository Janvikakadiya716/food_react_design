import React from "react";
import { Link } from "react-router-dom";
import Racipe_cate_2 from "../../Pages/Recipes/Racipe_cate_2";
import Home_Inbox from "../Home_Inbox";

function Footer() {
  return (
    <div>
   <Racipe_cate_2/>
   <Home_Inbox/>
      <div className="footer">
        <div className="container-fluid">
          <div className="row footer_info">
            <div className="col-md-6 logo_footer">
              <img src="./logo.svg" className="footer_logo"></img>
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
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
              <img src="./001-facebook.svg" alt="Facebook" ></img>
              </a>
              <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
              <img src="./003-twitter.svg" alt="Twitter"></img>
              </a>
              <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
              <img src="./004-instagram.svg" alt="Instagram"></img>
              </a>
            </div>
          </div>
          <div className="copy_right right ">
          <div className="social text-center">
  <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
    <img src="./001-facebook.svg" alt="Facebook" className="mx-2" />
  </a>
  <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
    <img src="./003-twitter.svg" alt="Twitter" className="mx-2" />
  </a>
  <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
    <img src="./004-instagram.svg" alt="Instagram" className="mx-2" />
  </a>
</div>

            <div className="years text-center mt-3">
              © 2020 Flowbase. Powered by{" "}
              <span className="text-danger ">Webflow</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
