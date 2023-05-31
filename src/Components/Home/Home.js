import React from 'react'
import Category from '../Category';
import Racipes_category from '../Racipes_category';
import View_Instagram from '../View_Instagram';
import Home_Inbox from '../Home_Inbox';
import Racipe_cate_2 from '../Racipe_cate_2';
import Footer from '../Footer/Footer';

function Home() {
  return (
   <>
   <div class='home'>
   <div className='container-fluid'>
   <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
     
      <div class='row home_row'>
        <div class='col-md-6 '>
        <div class='hero_left'>
          <div class='btn'>
          <button class='letter_button'>
          <img src='./letter.png'/>
         <div class='button_title' > Hot Recipes </div></button>

          </div>
          <div class='hero_title'>
          Spicy delicious <br></br>chicken wings
          </div>
          <div class='hero_info'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
          </div>
          <div class='hero_button'>
          <button class='letter_button l_btn'>
          <img src='./Timer.png'/>
         <div class='button_title' > 30 Minutes 
         </div>
         </button>
         <button class='letter_button'>
          <img src='./ForkKnife.png'/>
         <div class='button_title' >Chicken </div></button>
          </div>
          <div class='hero_profile d-flex'>
          <div className='profile d-flex'>
            <div class='profile_man'>
              <img src='./video.png'/>
            </div>
            <div class='profile_info '>
              <div class='name'>
              John Smith
              </div>
              <div class='date'>
              15 March 2022
              </div>
            </div>
            </div>
            <div class='video_button'>
              <button class='view_btn'>
              View Recipes <img src='./man.png'></img>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div class='col-md-6'>
          <img src='./slide.png'></img>
        </div>
      </div>
         </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div class='row home_row'>
        <div class='col-md-6 '>
        <div class='hero_left'>
          <div class='btn'>
          <button class='letter_button '>
          <img src='./letter.png'/>
         <div class='button_title' > Hot Recipes </div></button>

          </div>
          <div class='hero_title'>
          Spicy delicious <br></br>chicken wings
          </div>
          <div class='hero_info'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
          </div>
          <div class='hero_button'>
          <button class='letter_button l_btn'>
          <img src='./Timer.png'/>
         <div class='button_title' > 30 Minutes </div></button>
         <button class='letter_button'>
          <img src='./ForkKnife.png'/>
         <div class='button_title' >Chicken </div></button>
          </div>
          <div class='hero_profile d-flex'>
          <div className='profile d-flex'>
            <div class='profile_man'>
              <img src='./video.png'/>
            </div>
            <div class='profile_info '>
              <div class='name'>
              John Smith
              </div>
              <div class='date'>
              15 March 2022
              </div>
            </div>
            </div>
            <div class='video_button'>
              <button class='view_btn'>
              View Recipes <img src='./man.png'></img>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div class='col-md-6'>
          <img src='./slide.png'></img>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div class='row home_row'>
        <div class='col-md-6 '>
        <div class='hero_left'>
          <div class='btn'>
          <button class='letter_button l_btn'>
          <img src='./letter.png'/>
         <div class='button_title' > Hot Recipes </div></button>

          </div>
          <div class='hero_title'>
          Spicy delicious <br></br>chicken wings
          </div>
          <div class='hero_info'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
          </div>
          <div class='hero_button'>
          <button class='letter_button l_btn'>
          <img src='./Timer.png'/>
         <div class='button_title' > 30 Minutes 
         </div>
         </button>
         <button class='letter_button'>
          <img src='./ForkKnife.png'/>
         <div class='button_title' >Chicken </div></button>
          </div>
          <div class='hero_profile d-flex'>
          <div className='profile d-flex'>
            <div class='profile_man'>
              <img src='./video.png'/>
            </div>
            <div class='profile_info '>
              <div class='name'>
              John Smith
              </div>
              <div class='date'>
              15 March 2022
              </div>
            </div>
            </div>
            <div class='video_button'>
              <button class='view_btn'>
              View Recipes <img src='./man.png'></img>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div class='col-md-6'>
          <img src='./slide.png'></img>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </div>

   </div>
   <Category/>
   <Racipes_category/>
   <div className='container-fluid'>
    <div className='poster_chef'>
    <div class='row home_row'>
        <div class='col-md-5 '>
        <div class='hero_left'>
         
          <div class='hero_title'>
          Everyone can be a
chef in their own kitchen 
          </div>
          <div class='hero_info'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
          </div>
        
          
            <div class='video_button'>
              <button class='view_btn learn'>
             Learn More 
              </button>
            </div>
          
        </div>
        </div>
        <div class='col-md-7 '>
          <img src='./chef.png' className='chef'></img>
        </div>
      </div>
    </div>
   </div>
   <View_Instagram/>
 <Racipe_cate_2/>
   <Home_Inbox/>
   <Footer/>
   </>
  )
}

export default Home