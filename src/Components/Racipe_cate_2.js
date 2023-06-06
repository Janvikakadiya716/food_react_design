import React from 'react';

function Racipe_cate_2() {
  const racipe_list = [
    {
      id: 1,
      img: './m1.png',
      title: 'Mixed Tropical Fruit Salad with Superfood Boosts'
    },
    {
      id: 2,
      img: './m2.png',
      title: 'Big and Juicy Wagyu Beef Cheeseburger'
    },
    {
      id: 3,
      img: './m3.png',
      title: 'Healthy Japanese Fried Rice with Asparagus'
    },
    {
      id: 4,
      img: './m4.png',
      title: 'Cauliflower Walnut Vegetarian Taco Meat'
    },
  
  ];

  return (
    <div className='container-fluid racipe_cate_2'>
      <div className='row'>
        <div className='col-md-6 category_title'>
          Try this delicious recipe to make your day
        </div>
        <div className='col-md-6 hero_info'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </div>
      </div>
      <div className='racipes_category'>
        <div className='row'>
          {racipe_list.map((recipe) => (
            <div className='col-md-6 col-lg-3' key={recipe.id}>
              <div className='racipes_list'>
                <div className='wish-list-button'>
                  <img src='./Heart.png' alt='Heart' />
                </div>
                <img src={recipe.img} className='recipe_image' alt={recipe.title} />
                <div className='racipes_title'>
                  {recipe.title}
                </div>
                <div className='d-flex '>
                  <button className='d-flex cate_r_2'>
                    <img src='./Timer.png' alt='Timer' />
                    <div className='button_title'>30 Minutes</div>
                  </button>
                  <button className='d-flex cate_r_2'>
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

export default Racipe_cate_2;
