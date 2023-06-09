import React from 'react';
import Buttons from '../../Components/Buttons/Button';
import View_Instagram from '../../Components/View_Instagram';
import Category from '../../Components/Category/Category';
import Racipes_category from '../Recipes/Racipes_category';
import Home_slider from '../../Components/Home_slider/Home_slider';
import CategoryButton from '../../Components/Buttons/Category_btn';
import Mobile_slider from '../../Components/Home_slider/Mobile_slider';

function Home() {
  return (
    <>
    
      <div className="home">
        <Home_slider />
       <Mobile_slider/>
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
