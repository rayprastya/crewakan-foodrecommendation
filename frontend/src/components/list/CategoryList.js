import React from 'react';

const CategoryList = ({ categorys }) => {
  return (
    <div className="container my-3 ">
      <div className="d-flex gap-1 scrollx">
        {categorys.map((category, index) => (
            <a style={{fontSize:'12px'}} className='btn btn-outline-secondary btn-sm rounded-5 text-nowrap' key={index}>{category.name}</a>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
