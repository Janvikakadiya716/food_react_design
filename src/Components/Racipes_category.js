import React from 'react'
import racipe_list from './Racipe_list';
function Racipes_category() {
  return (
    <div className='container-fluid'>
      <div className='r_c_info'>
        <div className='category_title'>
          Simple and tasty recipes
        </div>
        <div className='hero_info'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br></br>labore et dolore magna aliqut enim ad minim
        </div>
      </div>
      <div className='racipes_category'>
        <div className='row'>
          {racipe_list.map((recipe) => (
            <div className='col-md-4 col-sm-4' key={recipe.id}>
              <div className='racipes_list'>
                <div className='wish-list-button'>
                  <img src='./Heart.png' alt='Heart' />
                </div>
                <img src={recipe.img} className='recipe_image' alt={recipe.title} />
                <div className='racipes_title'>
                  {recipe.title}
                </div>
                <div className='hero_button r_btn'>
                  <button className='letter_button racipes_button'>
                    <img src='./Timer.png' alt='Timer' />
                    <div className='button_title'>30 Minutes</div>
                  </button>
                  <button className='letter_button racipes_button'>
                    <img src='./ForkKnife.png' alt='Fork and Knife' />
                    <div className='button_title'>Chicken</div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

    
  
export default Racipes_category
