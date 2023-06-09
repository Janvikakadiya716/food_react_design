import React from 'react';

function CategoryButton({ title, className }) {
  return (
    <div>
      <button className={`view_btn ${className}`}>
        <div className="">{title}</div>
      </button>
    </div>
  );
}

export default CategoryButton;
