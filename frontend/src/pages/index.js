import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FoodList from '@/components/list/FoodList';
import foods from '@/data/foods';
import category from '@/data/category';
import CategoryList from '@/components/list/CategoryList';
import OrderList from '@/components/list/OrderList';
import RecomendationList from '@/components/list/RecomendationList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { useState, useEffect } from 'react';

const [aroundYou, setAroundYou] = useState([]);
const [recommend, setRecommend] = useState([]);

let data = {
  merchant_id: 2,
}

useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommend-nearby`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(res => {
      if(res.ok){
        setAroundYou(res.json());
      }
    })
}, []);


export default function Home() {
  return (
    <main>
      <Sidebar/>
      <Topbar/>
      <div className="content">
      <div className="row">
        <div className="col-md-8">
          <div className="container">
            <div className="w-100 rounded-3 p-4 d-flex bg-danger-subtle shadow-sm">
              <div className="col-9 d-flex justify-content-center flex-column">
                <div className="align-self-center">
                  <a href="#" className="btn btn-sm btn-success rounded-5 px-4">Sought after by customer</a>
                  <div className="h1">Incomplete Indomie (without chicken)</div>
                  <div className="h5 my-2">AI Suggestions by Marina</div>
                  <p>Wanna know the <i>secret recipe</i>? | <a href="#" className="text-decoration-none"><FontAwesomeIcon icon="utensils" /> See recipe</a></p>
                </div>
              </div>
              <div className="col-3 align-self-center">
              <img className="rounded-2 w-100" src="https://indomie.ng/wp-content/uploads/2019/06/cps-img.png" alt="Indomie" />
              </div>
            </div>

            <h4 className='ms-2 mb-2 mt-4'>
              <span className='text-nowrap mx-2'>Currently trending in your area!</span>
              <hr className="w-100 align-self-center my-2 mx-3" />
            </h4>
            <RecomendationList foods={foods} />

            <h4 className='ms-2 mb-2 mt-4'>
              <span className='text-nowrap mx-2'>Recommendations based on your existing menu:</span>
              <hr className="w-100 align-self-center my-2 mx-3" />
            </h4>
            <RecomendationList foods={foods} />

            <h4 className='ms-2 mb-2 mt-4'>
              <span className='text-nowrap mx-2'>My products:</span>
              <hr className="w-100 align-self-center my-2 mx-3" />
            </h4>
            <CategoryList categorys={category} />

            <FoodList foods={foods} />
          </div>
        </div>
        <div className="col-md-4 card">
          <div className="d-flex justify-content-between mt-3">
            <h5>Saved recommendations</h5>
            <a href="#" className="text-decoration-none align-self-center">Detail</a>
          </div>
          <hr />
          <OrderList foods={foods} />
        </div>
      </div>
      </div>
    </main>
  );
}
