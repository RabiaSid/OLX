import React from 'react'
import { furniture } from "../../../../config/dummyData";
import ProductCard from "../../../../components/cards/ProductCard";

function Furniture() {
  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center container m-auto p-auto">
        <div className="row m-auto p-auto">
        <h1>Furniture </h1>
        {furniture.map((furniture_items) => {
          return <ProductCard data={furniture_items} />;
        })}
      </div>
      </div>
    </>
  )
}

export default Furniture