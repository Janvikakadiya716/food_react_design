import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Instagrame from "./Instagrame";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function View_Instagram() {
  return (
    <div className="container-fluid">
      <div className="view_instagram">
        <div className="category_title text-center">
          Check out @foodieland on Instagram
        </div>
        <div className="hero_info text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </div>

        <div className="container-fluid">
          <div className="carousel-wrapper">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={20}
              
              responsive={{
                0: {
                  items: 1,
                  nav: true,
                  autoplayTimeout: 2000, // Autoplay interval in milliseconds
        autoplaySpeed: 1000, // Transition speed in milliseconds
        autoplayHoverPause: true,
                },
                576: {
                  items: 1,
                  nav: true,
                  autoplayTimeout: 2000, // Autoplay interval in milliseconds
        autoplaySpeed: 1000, // Transition speed in milliseconds
        autoplayHoverPause: true,
                },
                768: {
                  items: 2,
                  nav: true,
                  autoplayTimeout: 2000, // Autoplay interval in milliseconds
        autoplaySpeed: 1000, // Transition speed in milliseconds
        autoplayHoverPause: true,
                },
                992: {
                  items: 4,
                  nav:false,
                  dots: false,
                },
              }}
              nav
            >
              <Instagrame />
              <Instagrame />
              <Instagrame />
              <Instagrame />
              <Instagrame />
            </OwlCarousel>
          </div>
        </div>
        <div className="video_button instagram_btn">
          <button className="view_btn insta_view">
            Visit Our Instagram{" "}
            <img src="./white_instagram.png" className="p-2"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default View_Instagram;
