import React from "react";
import categorylist from "./category_list";
import OwlCarousel from "react-owl-carousel";
function Category() {
  return (
    <div className="container-fluid">
      <div className="category ">
        <div className="category_title">Categories</div>
        <button className="category_btn">View All Categories</button>
      </div>
      <div className="category_list">
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={20}
            items={6}
           
            responsive={{
              0: {
                items: 1,
                nav: true,
                autoplayTimeout: 1000, // Autoplay interval in milliseconds
        autoplaySpeed: 1000, // Transition speed in milliseconds
        autoplayHoverPause: true,
              },
              576: {
                items: 2,
                nav: true,
                  autoplay: true,
              autoplayTimeout: 1000

              },
              768: {
                items: 3,
                nav: true,
                  autoplay: true,
              autoplayTimeout: 1000
              },
              992: {
                items: 6,
                nav:false,
                  dots: false,
              
              },
            }}
            nav
          >
            {categorylist.map((category) => (
              <div className="" key={category.id}>
                <div className="list" style={category.style}>
                  <img src={category.image} alt={category.title} className="list_img" />
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
