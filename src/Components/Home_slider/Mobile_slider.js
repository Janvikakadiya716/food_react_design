import React from "react";

function Mobile_slider() {
  return (
    <div className="container-fluid mobile_view_home">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="./slide.png"
              className="d-block w-100 slide_img"
              alt="Slide"
            />
            <div className="carousel-caption">
              <h1 className="text-dark slide_mobile">
                Spicy delicious chicken wings
              </h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="./slide.png"
              className="d-block w-100 slide_img"
              alt="Slide"
            />
            <div className="carousel-caption">
              <h1 className="text-dark slide_mobile">
                Spicy delicious chicken wings
              </h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Mobile_slider;
