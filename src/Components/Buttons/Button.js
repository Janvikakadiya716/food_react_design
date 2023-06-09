import React from 'react'

function Button({ icon, title,className}) {
  return (
    <div>
      <button className={`letter_button ${className}`}>
      <img src={icon} alt={title} />
      <div className={`button_title ${className}`}>{title}</div>
    </button>
    </div>
  )
}

export default Button


