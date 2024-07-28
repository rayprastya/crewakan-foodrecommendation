import React from 'react';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const RecomendationList = ({ foods }) => {
  function addToWishlist(food){
    const data = {
      merchant_id: 1,
      name: food.name,
      recipes: food.recipes.join(';'),
      steps: food.steps.join('|')
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishlists`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.ok){
          window.location.reload();
        }
      })

  }

  return (
    <div className="container my-3">
      <div className="d-flex gap-1 scrollx">
        {foods?.map((food, index) => (
            <div className="card" key={index} onClick={() => {addToWishlist(food)}}>
                <img src={food.image} className='w-100' alt="" />
                <span className="fw-bold" style={{position:'absolute', left:'10px', bottom:'10px'}}>
                    {food.name} <br className='my-1'/>
                    <span className="text-white bg-warning px-2 py-1" style={{fontSize:'10px'}}>Hard</span> <br />
                    <span style={{fontSize:'10px'}}>10 Min</span>
                </span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendationList;
