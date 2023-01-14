
import React from "react"
import AdsBanner from "../../../section/Adsbanner/Adsbanner";
import Appbanner from "../../../section/Appbanner/appbanner";
import Card_carousel from "../../../section/Card_carousel/Card_carousel"
import AppProduct from "../../../section/product/product"
import TopSlider from "../../../section/TopSlider/TopSlider"
const MovingComponentMemo = React.memo(AppProduct);
function AppHome() {
  return (
    <React.Fragment>
      <TopSlider />
      <Card_carousel />
      <AppProduct />
      <AdsBanner />
      <Appbanner />
    </React.Fragment>
  )
}

export default AppHome