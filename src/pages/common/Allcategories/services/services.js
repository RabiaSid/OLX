import React from 'react'
import { services } from "../../../../config/dummyData";
import ProductCard from "../../../../components/cards/ProductCard";


function Services() {


  return (
  
    <>
      
    <div className="d-flex justify-content-center align-items-center container m-auto p-auto">
      <div className="row m-auto p-auto">
      <h1>Services </h1>
      {services.map((service_items) => {
        return <ProductCard data={service_items} />;
      })}
    </div>
    </div>
  </>
  
    )
  }

export default Services