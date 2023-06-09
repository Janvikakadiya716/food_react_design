import React from 'react';
import Buttons from '../../Components/Buttons/Button';
import View_Instagram from '../../Components/View_Instagram';
import Category from '../../Components/Category/Category';
import Racipes_category from '../Recipes/Racipes_category';
import Home_slider from '../../Components/Home_slider/Home_slider';
import CategoryButton from '../../Components/Buttons/Category_btn';

function Home() {
  return (
    <>
      {/* home */}
      <div className="home">
        <Home_slider />
        {/* main-slider */}
        
        {/* end of main-slider */}
        {/* mobile-slider */}
        
        <div className="container-fluid mobile_view_home">
  <div
    id="carouselExampleInterval"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div
        className="carousel-item active"
        data-bs-interval="3000"
      >
        <img src="./slide.png" className="d-block w-100 slide_img" alt="Slide" />
        <div className="carousel-caption">
          <h1 className="text-dark slide_mobile">Spicy delicious chicken wings</h1>
        </div>
      </div>
      <div
        className="carousel-item"
        data-bs-interval="3000"
      >
        <img src="./slide.png" className="d-block w-100 slide_img" alt="Slide" />
        <div className="carousel-caption">
          <h1 className="text-dark slide_mobile">Spicy delicious chicken wings</h1>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

        {/* end of mobile slider */}
        <Category />
        <Racipes_category />
        {/* poster chef */}
        <div className="container-fluid poster_chef">
          <div className="row home_row">
            <div className="col-md-6">
              <div className="hero_left poster_left">
                <div className="hero_title">
                  Everyone can be a chef in their own kitchen
                </div>
                <div className="hero_info">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  <br></br>
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  <br></br>
                  enim ad minim
                </div>
                <div className="video_button mt-3">
                  <CategoryButton title="Learn More" className={'view_btn'} />
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 ">
              <img src="./chef.png" className="chef"></img>
            </div>
          </div>
        </div>
        {/* end of poster chef */}
<View_Instagram/>
       
        </div>
      {/* end of home */}
    </>
  )
}

export default Home
