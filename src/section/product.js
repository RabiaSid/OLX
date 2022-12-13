import React from "react";
import Product_cards from "../components/cards/product_cards";


function AppProduct() {

  return (
    <div className="row d-flex p-0 m-0">
    <div className="container py-5  justify-content-center align-items-center col-12 ">
      <div className="row">
      
        <div className=" col-sm-6 col-lg-4 col-xl-3 ">
          <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3 ">
          <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3 ">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3 ">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3 ">
        <Product_cards />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <Product_cards />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <Product_cards />
  </div>
      </div>
    </div>
    </div>
  );
}

export default AppProduct;
