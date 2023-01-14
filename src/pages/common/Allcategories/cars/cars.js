import React from "react";
import { cars } from "../../../../config/dummyData";
import ProductCard from "../../../../components/cards/ProductCard";


function Cars() {
  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center container m-auto p-auto">
        <div className=" row m-auto p-auto">
        <h1>Car </h1>
        {cars.map((car_items) => {
          return <ProductCard data={car_items} />;
        })}
      </div>
      </div>
    </>
  );
}

export default Cars;
