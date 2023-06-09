import React from 'react'
import Buttons from '../../Components/Buttons/Button'
import Icon_button from '../Buttons/Icon_button'
function Home_slider() {
  return (
    <div>
         <div className="container-fluid hero_slider">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item  caro_item active"
                data-bs-interval="2000"
              >
                <div class="row home_row">
                  <div class="col-6 ">
                    <div class="hero_left">
                      <div class="btn">
                       
                         <Buttons icon="./letter.png" title="Hot Recipes" className='font-weight-bold' />
                      </div>
                      <div class="hero_title">
                        Spicy delicious <br></br>chicken wings
                      </div>
                      <div class="hero_info">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim
                      </div>
                      <div class="hero_button ">
                      <Buttons  icon="./Timer.png" title="30 Minutes"/>
                      <Buttons icon="./ForkKnife.png" title="Chicken" />
                       
                      </div>
                      <div class="hero_profile d-flex">
                        <div className="profile d-flex">
                          <div class="profile_man">
                            <img src="./video.png" />
                          </div>
                          <div class="profile_info ">
                            <div class="name">John Smith</div>
                            <div class="date">15 March 2022</div>
                          </div>
                        </div>
                        <div class="video_button">
                         
                          <Icon_button icon="./man.png" title=" View Recipes" className='view_btn' />
      
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <img src="./slide.png" className="Slides_img"></img>
                  </div>
                </div>
              </div>
              <div class="carousel-item  caro_item " data-bs-interval="1000">
              <div class="row home_row">
                  <div class="col-6 ">
                    <div class="hero_left">
                      <div class="btn">
                       
                         <Buttons icon="./letter.png" title="Hot Recipes" className='home_timer_btn' />
                      </div>
                      <div class="hero_title">
                        Spicy delicious <br></br>chicken wings
                      </div>
                      <div class="hero_info">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim
                      </div>
                      <div class="hero_button ">
                      <Buttons  icon="./Timer.png" title="30 Minutes"/>
                      <Buttons icon="./ForkKnife.png" title="Chicken" />
                       
                      </div>
                      <div class="hero_profile d-flex">
                        <div className="profile d-flex">
                          <div class="profile_man">
                            <img src="./video.png" />
                          </div>
                          <div class="profile_info ">
                            <div class="name">John Smith</div>
                            <div class="date">15 March 2022</div>
                          </div>
                        </div>
                        <div class="video_button">
                          <button class="view_btn">
                            View Recipes{' '}
                            <img src="./man.png" className="mx-2"></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <img src="./slide.png" className="Slides_img"></img>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev pre_btn"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next pre_btn"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
       
    </div>
  )
}

export default Home_slider
