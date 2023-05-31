import React from 'react'

function Recipes() {
  return (
    <>
      <div className='container-fluid '>
      <div className='recipe_rice'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='category_title'>
            Health Japanese Fried Rice
            </div>
            <div className='container-fluid rice_p '>
  {/* <div className='row'>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./video.png'></img>
        <div className='rice_info'>
          <div className='name'>
            John Smith
          </div>
          <div className='date'>
            15 March 2022
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./Timer.png' height={30} className='mt-3'></img>
        <div className='rice_info'>
          <div className='name'>
            PREP TIME
          </div>
          <div className='date'>
            15 Minutes
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./Timer.png' height={30} className='mt-3'></img>
        <div className='rice_info'>
          <div className='name'>
            CLOCK TIME
          </div>
          <div className='date'>
            15 Minutes
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./ForkKnife.png' height={30} className='mt-3'></img>
        <div className='rice_info'>
          <div className='date'>
            15 Minutes
          </div>
        </div>
      </div>
    </div>
  </div> */}
</div>

          </div>


          
          <div className='col-md-4'>
            <div className='rice_img d-flex'>
              <img src='./printer.png'></img>
              <img src='./share.png'></img>
            </div>
          </div>
        </div>
        <div className='tablate_view'>
        <div className='container-fluid '>
  <div className='row'>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./video.png'></img>
        <div className='rice_info'>
          <div className='name'>
            John Smith
          </div>
          <div className='date'>
            15 March 2022
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./Timer.png' height={30} className='mt-3'></img>
        <div className='rice_info'>
          <div className='name'>
            PREP TIME
          </div>
          <div className='date'>
            15 Minutes
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./Timer.png' height={30} className='mt-3'></img>
        <div className='rice_info'>
          <div className='name'>
            CLOCK TIME
          </div>
          <div className='date'>
            15 Minutes
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-3'>
      <div className='rice_profile d-flex mt-3'>
        <img src='./ForkKnife.png' height={30} className='mt-3'></img>
        <div className='rice_info'>
          <div className='date'>
            15 Minutes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
      
    
    
    <div className='rice_hero'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <img src='./racipe_part.png' className='rice_img'></img>
            {/* <iframe width="600" height="400" src="https://www.youtube.com/embed/rmJ2pwXz1Yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className='col-md-6'>
            <div className='rice_info_2'>
              <div className='rice_p_title'>
              Nutrition Information
              </div>
              <div className='rice_category  '>
                <div className='rice_category_title'>
                Total Fat
                </div>
                <div className='rice_category_info'>
                10.7 g
                  </div>
              </div>
              <hr></hr>

              <div className='rice_category  '>
                <div className='rice_category_title'>
                Protein
                </div>
                <div className='rice_category_info'>
                7.9 g
                  </div>
              </div>
              <hr></hr>


              <div className='rice_category  '>
                <div className='rice_category_title'>
                Carbohydrate

                </div>
                <div className='rice_category_info'>
                22.3 g
                  </div>
              </div>
              <hr></hr>



              <div className='rice_category  '>
                <div className='rice_category_title'>
                Calories
                </div>
                <div className='rice_category_info'>
                219.9 kcal
                  </div>
              </div>
              <hr></hr>


              <div className='rice_category  '>
                <div className='rice_category_title'>
                Cholesterol
                </div>
                <div className='rice_category_info'>
                37.4 mg                  </div>
              </div>
              <hr></hr>

              <div className='hero_info text-center '>
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </div>
            </div>
           
            </div>
        </div>
      </div>
      <div className='hero_info mt-5'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>

    <div className='rice_other mt-5'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='.rice_p_title'>
          Ingredients
          </div>
        </div>
        <div className='col-md-8'>
            <div className='.rice_p_title'>
            Other Recipe
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}

export default Recipes