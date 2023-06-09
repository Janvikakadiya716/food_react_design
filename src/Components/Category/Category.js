import React from "react";
import categorylist from "./category_list";
import OwlCarousel from "react-owl-carousel";
import CategoryButton from "../Buttons/Category_btn";
function Category() {
  return (
    <div className="container-fluid">
      <div className="category ">
        <div className="category_title">Categories</div>
        <CategoryButton  title="View All Categories" className={'category_btn'} />
      </div>
      
      <div className="category_list">
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            margin={20}
            items={6}
            responsive={{
              0: {
                items: 1,
                nav: true,
                autoplayTimeout: 1000,
                autoplaySpeed: 1000,
                autoplayHoverPause: true,
                loop: true,
              },
              576: {
                items: 2,
                nav: true,
                autoplay: true,
                autoplayTimeout: 1000,
                loop: true,
              },
              768: {
                items: 3,
                nav: true,
                autoplay: true,
                autoplayTimeout: 1000,
                loop: true,
              },
              992: {
                items: 6,
                nav: false,
                dots: false,
                loop: false,
                touchDrag: false, // Disable swipe on touch devices
                mouseDrag: false, // Remove loop property
              },
            }}
          >
            {categorylist.map((category) => (
              <div className="" key={category.id}>
                <div className="list" style={category.style}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="list_img"
                  />
                  <div className="list_name">{category.title}</div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    
    </div>
    
  );
}

export default Category;
