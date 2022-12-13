import Card_carousel from "../../../section/Card_carousel"
import AppProduct from "../../../section/product"
import TopSlider from "../../../section/TopSlider"
import AppAbout from "../about/about"

function AppHome() {
  return (
    <div >
      <TopSlider />
      <Card_carousel />
      <AppProduct />
      <AppAbout />
    </div>
  )
}

export default AppHome