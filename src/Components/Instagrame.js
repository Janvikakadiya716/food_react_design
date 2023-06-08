import React from 'react'

function Instagrame() {
  return (
    <>
       <div className="">
       
              <div className="instagram_view">
                <div className="Foodieland d-flex">
                  <div className="foodie d-flex">
                    <img
                      src="./logo_oval.svg"
                      alt="Foodieland"
                      className="black_logo"
                    />
                    <div className="foodoe_info p-2">
                      <div className="food_title d-flex">
                        <div>Foodieland.</div>
                        <img src="./true.svg" alt="True" />
                        </div>
                        <div className="food_info">Tokyo, Japan</div>
                      
                    </div>
                  </div>
                  <div className="dot">
                    <img src="./dot.png" alt="Dot" className="mt-3" />
                  </div>
                </div>
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                
                >
                  <ol className="carousel-indicators">
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100 first_slide"
                        src="./in1.png"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100 first_slide"
                        src="./in2.png"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100 first_slide"
                        src="./in3.png"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                 
                </div>
                <div className="food_follow">
                  <div className="food_icon d-flex mt-">
                    <div className="food_like d-flex ">
                      <img src="./like.svg" alt="Like" />
                      <img src="./bilori.svg" alt="Bilori" />
                      <img src="./arrow.svg" alt="Arrow" />
                    </div>
                    <div className="food_shape">
                      <img src="./shape.svg" alt="Shape" />
                    </div>
                  </div>

                  <div className="follow_food pt-2">
                    <p className="food_info ">
                      <img
                        src="./man_oval.svg"
                        height={20}
                        className="mx-1"
                      ></img>
                      Liked by <span className="food_title">craig_love</span>{" "}
                      and <span className="food_title">44,686</span> 
                    </p>
                    <p className="food_info ">
                      <span className="food_title">Foodieland.</span> The
                      vegetables dishes need to have certain vitamin for those
                      people
                    </p>
                  </div>
                  <p className="food_info">September 19</p>
                </div>
              </div>
              
            </div>
    </>
  )
}

export default Instagrame
