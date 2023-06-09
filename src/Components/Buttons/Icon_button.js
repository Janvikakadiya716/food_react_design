import React from 'react'

function Icon_button({ icon, title,className}){
  return (
    <div>
    <button className={`insta_view view_btn d-flex ${className}`}>
   
    <div className="text-light mx-2">{title}</div>
    <img src={icon} alt={title} />
  </button>
  </div>
  )
}

export default Icon_button
