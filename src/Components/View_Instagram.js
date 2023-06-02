import React from 'react';

function View_Instagram() {
  const food = [
    {
      id: 1,
      img: './in1.png',
    },
    {
      id: 2,
      img: './in2.png',
    },
    {
      id: 3,
      img: './in3.png',
    },
    {
      id: 4,
      img: './in4.png',
    },
  ];

  return (
    <div className='container-fluid'>
      <div className='view_instagram'>
        <div className='category_title text-center'>
          Check out @foodieland on Instagram
        </div>
        <div className='hero_info text-center'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqut enim ad minim
        </div>

        <div className='container-fluid'>
          <div className='row'>
            {food.map((item) => (
              <div className='col-md-3' key={item.id}>
                <div className='instagram_view'>
                <div className='Foodieland d-flex'>
<div className='foodie d-flex '>
<img src='./logo_oval.png' ></img>
<div className='foodoe_info p-2'>
<div className='food_title'>
Foodieland.<img src='./true.png' ></img>
<div className='food_info'>
Tokyo, Japan
</div>
</div>

</div>
</div>
<div className='dot'>
  <img src='./dot.png'></img>
</div>
</div>
                  <div className='instagram_img'>
                    <img src={item.img} className='instagram_img' alt='Instagram Image' />
                  </div>
                  <div className='food_follow'>
                    <div className='food_icon d-flex'>
                      <div className='food_like d-flex mt-1'>
                        <img src='./like.png' alt='Like' />
                        <img src='./bilori.png' alt='Bilori' />
                        <img src='./arrow.png' alt='Arrow' />
                      </div>
                      <div className='food_shape'>
                        <img src='./shape.png' alt='Shape' />
                      </div>
                    </div>
                    <div className='follow_food'>
                      <p className='food_info p-2'>Liked by <span className='food_title'>craig_love</span> and <span className='food_title'>44,686</span> others</p>
                      <p className='food_info '><span className='food_title'>Foodieland.</span> The vegetables dishes need to have certain vitamin for those people</p>
                    </div>
                    <p className='food_info'>September 19</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_Instagram;
