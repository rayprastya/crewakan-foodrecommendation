import React from 'react';

const FoodList = ({ foods }) => {
  return (
    <div className="container my-3">
      <div className="row g-2">
        {foods.map((food, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={food.image} className="card-img-top" alt={food.name} />
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.description}</p>
                <a href="#" className="btn btn-primary">Order Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
