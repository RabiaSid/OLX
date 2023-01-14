import React from 'react'
import { electronic } from "../../../../config/dummyData";
import ProductCard from "../../../../components/cards/ProductCard";


function Electronic() {
  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center container m-auto p-auto">
        <div className="row m-auto p-auto">
        <h1>Electronic </h1>
        {electronic.map((electronic_items) => {
          return <ProductCard data={electronic_items} />;
        })}
      </div>
      </div>
    </>
  
  


  )
}

export default Electronic