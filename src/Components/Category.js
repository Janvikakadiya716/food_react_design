import React from 'react';
import categorylist from './category_list';

function Category() {
  return (
    <div className='container-fluid'>
      <div className="category ">
        <div className="category_title">
          Categories
        </div>
        <button className='category_btn'>View All Categories</button>
      </div>
      <div className="category_list">
        <div className="row">
          {categorylist.map((category) => (
            <div className="col-md-2" key={category.id}>
              <div className="list" style={category.style}>
                <img src={category.image} alt={category.title} />
                <div className="list_name">{category.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
