
import React from "react";
import Cars from "../../pages/common/Allcategories/cars/cars";
import Mobile from "../../pages/common/Allcategories/mobile/mobile";
import Electronic from "../../pages/common/Allcategories/electronic/electronic";
import Furniture from "../../pages/common/Allcategories/furniture/furniture";
import Services from "../../pages/common/Allcategories/services/services";
import Property from "../../pages/common/Allcategories/property/property";
import AdsBanner from "../Adsbanner/Adsbanner";
import Appbanner from "../Appbanner/appbanner";


function AppProduct() {

  return (
    

      <>
      <Mobile />
      <Electronic />
      <Services />
      <Furniture />
      <Property />
      <Cars />
      <AdsBanner />
      <Appbanner />
      </>
    
  );
}

export default AppProduct;
