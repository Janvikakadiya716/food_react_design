import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function View_Instagram() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);
  const carouselRef4 = useRef(null);

  useEffect(() => {
    const carouselElement1 = carouselRef1.current;
    const carouselElement2 = carouselRef2.current;
    const carouselElement3 = carouselRef3.current;
    const carouselElement4 = carouselRef4.current;

    if (carouselElement1 && carouselElement2 && carouselElement3 && carouselElement4) {
      new window.bootstrap.Carousel(carouselElement1, {
        interval: 4000,
      });
      new window.bootstrap.Carousel(carouselElement2, {
        interval: 4000,
      });
      new window.bootstrap.Carousel(carouselElement3, {
        interval: 4000,
      });
      new window.bootstrap.Carousel(carouselElement4, {
        interval: 4000,
      });
    }
  }, []);

  return (
    <div className='container-fluid'>
      <div className='view_instagram'>
        <div className='category_title text-center'>
          Check out @foodieland on Instagram
        </div>
        <div className='hero_info text-center'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </div>

        <div className='container-fluid'>
          <div className='row'>
          <div className='col-md-6 col-lg-3'>
              <div className='instagram_view'>
                <div className='Foodieland d-flex'>
                  <div className='foodie d-flex'>
                    <img src='./logo_oval.svg' alt='Foodieland' className='black_logo'/>
                    <div className='foodoe_info p-2'>
                      <div className='food_title'>
                        Foodieland.<img src='./true.svg' alt='True' />
                        <div className='food_info'>Tokyo, Japan</div>
                      </div>
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='./dot.png' alt='Dot' className='mt-3' />
                  </div>
                </div>
                <div
                  id='carouselExampleIndicators2'
            className='carousel slide'
            data-bs-ride='carousel'
            ref={carouselRef2}
                >
                  <ol className='carousel-indicators'>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className='d-block w-100' src='./in1.png' alt='First slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in2.png' alt='Second slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in3.png' alt='Third slide' />
                    </div>
                  </div>
                  {/* <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                  </a> */}
                </div>
                <div className='food_follow'>
                  <div className='food_icon d-flex mt-'>
                    <div className='food_like d-flex '>
                      <img src='./like.svg' alt='Like' />
                      <img src='./bilori.svg' alt='Bilori' />
                      <img src='./arrow.svg' alt='Arrow' />
                    </div>
                    <div className='food_shape'>
                      <img src='./shape.svg' alt='Shape' />
                    </div>
                  </div>
                 

              <div className='follow_food pt-2'>
                <p className='food_info '><img src='./man_oval.svg' height={20} className='mx-1'></img>Liked by <span className='food_title'>craig_love</span> and <span className='food_title'>44,686</span> others</p>
                <p className='food_info '><span className='food_title'>Foodieland.</span> The vegetables dishes need to have certain vitamin for those people</p>
                </div>
                <p className='food_info'>September 19</p>
              
            </div>
           
          </div>
          
        </div>
        <div className='col-md-6 col-lg-3'>
              <div className='instagram_view'>
                <div className='Foodieland d-flex'>
                  <div className='foodie d-flex'>
                    <img src='./logo_oval.svg' alt='Foodieland' className='black_logo'/>
                    <div className='foodoe_info p-2'>
                      <div className='food_title'>
                        Foodieland.<img src='./true.svg' alt='True' />
                        <div className='food_info'>Tokyo, Japan</div>
                      </div>
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='./dot.png' alt='Dot' className='mt-3' />
                  </div>
                </div>
                <div
                  id='carouselExampleIndicators2'
            className='carousel slide'
            data-bs-ride='carousel'
            ref={carouselRef2}
                >
                  <ol className='carousel-indicators'>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className='d-block w-100' src='./in1.png' alt='First slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in2.png' alt='Second slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in3.png' alt='Third slide' />
                    </div>
                  </div>
                  {/* <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                  </a> */}
                </div>
                <div className='food_follow'>
                  <div className='food_icon d-flex'>
                    <div className='food_like d-flex '>
                      <img src='./like.svg' alt='Like' />
                      <img src='./bilori.svg' alt='Bilori' />
                      <img src='./arrow.svg' alt='Arrow' />
                    </div>
                    <div className='food_shape'>
                      <img src='./shape.svg' alt='Shape' />
                    </div>
                  </div>
                 

              <div className='follow_food pt-2'>
                <p className='food_info '><img src='./man_oval.svg' height={20} className='mx-1'></img>Liked by <span className='food_title'>craig_love</span> and <span className='food_title'>44,686</span> others</p>
                <p className='food_info '><span className='food_title'>Foodieland.</span> The vegetables dishes need to have certain vitamin for those people</p>
                </div>
                <p className='food_info'>September 19</p>
              
            </div>
           
          </div>
          
        </div>
        <div className='col-md-6 col-lg-3'>
              <div className='instagram_view'>
                <div className='Foodieland d-flex'>
                  <div className='foodie d-flex'>
                    <img src='./logo_oval.svg' alt='Foodieland' className='black_logo'/>
                    <div className='foodoe_info p-2'>
                      <div className='food_title'>
                        Foodieland.<img src='./true.svg' alt='True' />
                        <div className='food_info'>Tokyo, Japan</div>
                      </div>
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='./dot.png' alt='Dot' className='mt-3' />
                  </div>
                </div>
                <div
                  id='carouselExampleIndicators2'
            className='carousel slide'
            data-bs-ride='carousel'
            ref={carouselRef2}
                >
                  <ol className='carousel-indicators'>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className='d-block w-100' src='./in1.png' alt='First slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in2.png' alt='Second slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in3.png' alt='Third slide' />
                    </div>
                  </div>
                  {/* <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                  </a> */}
                </div>
                <div className='food_follow'>
                  <div className='food_icon d-flex'>
                    <div className='food_like d-flex '>
                      <img src='./like.svg' alt='Like' />
                      <img src='./bilori.svg' alt='Bilori' />
                      <img src='./arrow.svg' alt='Arrow' />
                    </div>
                    <div className='food_shape'>
                      <img src='./shape.svg' alt='Shape' />
                    </div>
                  </div>
                 

              <div className='follow_food pt-2'>
                <p className='food_info '><img src='./man_oval.svg' height={20} className='mx-1'></img>Liked by <span className='food_title'>craig_love</span> and <span className='food_title'>44,686</span> others</p>
                <p className='food_info '><span className='food_title'>Foodieland.</span> The vegetables dishes need to have certain vitamin for those people</p>
                </div>
                <p className='food_info'>September 19</p>
              
            </div>
           
          </div>
          
        </div>
        <div className='col-md-6 col-lg-3'>
              <div className='instagram_view'>
                <div className='Foodieland d-flex'>
                  <div className='foodie d-flex'>
                    <img src='./logo_oval.svg' alt='Foodieland' className='black_logo'/>
                    <div className='foodoe_info p-2'>
                      <div className='food_title'>
                        Foodieland.<img src='./true.svg' alt='True' />
                        <div className='food_info'>Tokyo, Japan</div>
                      </div>
                    </div>
                  </div>
                  <div className='dot'>
                    <img src='./dot.png' alt='Dot' className='mt-3' />
                  </div>
                </div>
                <div
                  id='carouselExampleIndicators2'
            className='carousel slide'
            data-bs-ride='carousel'
            ref={carouselRef2}
                >
                  <ol className='carousel-indicators'>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1'></li>
                    <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className='d-block w-100' src='./in1.png' alt='First slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in2.png' alt='Second slide' />
                    </div>
                    <div className='carousel-item'>
                      <img className='d-block w-100' src='./in3.png' alt='Third slide' />
                    </div>
                  </div>
                  {/* <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                  </a> */}
                </div>
                <div className='food_follow'>
                  <div className='food_icon d-flex'>
                    <div className='food_like d-flex '>
                      <img src='./like.svg' alt='Like' />
                      <img src='./bilori.svg' alt='Bilori' />
                      <img src='./arrow.svg' alt='Arrow' />
                    </div>
                    <div className='food_shape'>
                      <img src='./shape.svg' alt='Shape' />
                    </div>
                  </div>
                 

              <div className='follow_food pt-2'>
                <p className='food_info '><img src='./man_oval.svg' height={20} className='mx-1'></img>Liked by <span className='food_title'>craig_love</span> and <span className='food_title'>44,686</span> others</p>
                <p className='food_info '><span className='food_title'>Foodieland.</span> The vegetables dishes need to have certain vitamin for those people</p>
                </div>
                <p className='food_info'>September 19</p>
              
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
    <div class='video_button instagram_btn'>
              <button class='view_btn insta_view'>
              Visit Our Instagram <img src='./white_instagram.png ' className='p-2'></img>
              </button>
            </div>
    
    </div>
    </div>
  )
}

export default View_Instagram
