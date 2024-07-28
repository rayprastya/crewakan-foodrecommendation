import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import OrderList from "@/components/list/OrderList";
import CookingPlan from "@/components/list/CookingPlanDetail";
import foods from "@/data/foods";

export default function Plan() {
  const [clickState, setClickState] = useState(null);
  function handleClickState(param) {
    setClickState(param);
  }
  return (
    <main>
      <Sidebar/>
      <Topbar/>
      <div className="content d-flex flex-row">
        <div className="col-md-4 h-100 card">
          <div className="d-flex justify-content-between mt-3 px-3">
            <div><h5>Cooking Plan</h5>
              <h6 className="w-100 d-block">See recommendations you've saved earlier</h6></div>
          </div>
          <hr/>
          <OrderList foods={foods} handleClickState={handleClickState}/>
        </div>
        <div className="col-md-8 mx-2 h-100 border border-gray-200">
          <CookingPlan clickState={clickState} />

        </div>
      </div>
    </main>
  );
}
