import React from 'react'
import { property } from "../../../../config/dummyData";
import ProductCard from "../../../../components/cards/ProductCard";


function  Property() {
  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center container m-auto p-auto">
        <div className="row m-auto p-auto">
        <h1>Property </h1>
        {property.map((property_items) => {
          return <ProductCard data={property_items} />;
        })}
      </div>
      </div>
    </>

  )
}

export default Property