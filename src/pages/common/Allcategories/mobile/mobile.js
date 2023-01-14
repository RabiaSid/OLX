import React from 'react'
import { mobile } from "../../../../config/dummyData";
import ProductCard from "../../../../components/cards/ProductCard";

function Mobile() {
  return (
        
<>
      
      <div className="d-flex justify-content-center align-items-center container m-auto p-auto">
        <div className="row m-auto p-auto">
        <h1>Mobile </h1>
        {mobile.map((mobile_items) => {
          return <ProductCard data={mobile_items} />;
        })}
      </div>
      </div>
    </>

  )
}

export default Mobile