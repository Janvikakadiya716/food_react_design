import React from 'react'

function Category() {
  return (
   <>
    <div className='container-fluid'>
      <div class="category d-flex">
      <div class="category_title">
      Categories
      </div>
      <button class='category_btn'>View All Categories</button>
      </div>
      <div class="category_list">
        <div class="row">
          <div className='col-md-2'>
        <div className='list'>
          <img src='./21.png'></img>
          <div className='list_name'>
            Meat
          </div>
        </div>
          </div>
          <div className='col-md-2'>
          <div className='list list_2'>
          <img src='./22.png'></img>
          <div className='list_name'>
            Dessert
          </div>
        </div>
            </div>
            <div className='col-md-2'>
            <div className='list list_3'>
          <img src='./23.png'></img>
          <div className='list_name'>
            Lunch
          </div>
        </div>
            </div>
            <div className='col-md-2'>
            <div className='list list_4'>
          <img src='./24.png'></img>
          <div className='list_name'>
          Chocolate
          </div>
        </div>
            </div>
            <div className='col-md-2'>
            <div className='list list_5'>
          <img src='./25.png'></img>
          <div className='list_name'>
            Breakfast
          </div>
        </div>
            </div>
            <div className='col-md-2'>
            <div className='list list_6'>
          <img src='./26.png' height={100}></img>
          <div className='list_name'>
          Vegan
          </div>
        </div>
            </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Category