import React, {useEffect, useState} from 'react';
import GetOrderList from "@/components/getOrderList";

const OrderList = ({ foods, handleClickState = null }) => {
  const [wishlist, setWishlist] = useState(null);

  useEffect(()=> {
    GetOrderList(1, setWishlist);
  }, [])

  return (
    <div className="mt-2">
        {wishlist?.map((food, index) => (
          <div className={`w-100 card p-2 custom-hover-bg`} key={index}
               onClick={()=> {handleClickState && handleClickState(food)}}>
            <h5>{food.name}</h5>
            <div className="d-flex">
              <img src={'https://via.placeholder.com/150'} style={{height:'100px', width:'100px', borderRadius:'20px'}} alt={food.name} />
              <div className="ms-2 w-100">
                <div className="fw-bold">{food.recipes}</div>
                <div className="d-flex w-100 justify-content-between">
                  <div className="text-warning fw-bold align-self-center" style={{fontSize:'11px'}}>On Progress</div>
                </div>
                <div className="text-success">Rp. 20.000</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderList;
