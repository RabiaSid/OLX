import React from "react";
import ProductCard from "../../components/cards/ProductCard";
import { 
  cars, 
  electronic, 
  furniture,
  mobile,
  property,
  services, 
} from "../../config/dummyData";


function AppProduct() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center container m-auto p-auto">
        <div className=" row m-auto p-auto">
          <h1>Car </h1>
          {cars.map((car_items) => {
           return <ProductCard data={car_items} />
            
          })}
        
          <h1>Electronic</h1>

          {electronic.map((electronic_items) => (
            <ProductCard data={electronic_items} />
          ))}

          <h1>Furniture</h1>

          {furniture.map((furniture_items) => (
            <ProductCard data={furniture_items} />
          ))}
          <h1>Mobile</h1>

          {mobile.map((mobile_items) => (
            <ProductCard data={mobile_items} />
          ))}
          <h1>Property</h1>

          {property.map((property_items) => (
            <ProductCard data={property_items} />
          ))}
          <h1>Services</h1>

          {services.map((service_items) => (
            <ProductCard data={service_items} />
          ))} 
        </div>
      </div>
    </>
  );
}

export default AppProduct;
