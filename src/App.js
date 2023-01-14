import React from "react";
import { Layout } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppHeader from "./section/HeadApp/HeadApp";

import AppHome from "./pages/common/home";
import FooterApp from "./section/FooterApp/FooterApp";
import AppAbout from "./pages/common/about/about";
import AppFollow_us from "./pages/common/Follow_us/follow_us";
import AppAllcategories from "./pages/common/Allcategories/index";
import Electronic from "./pages/common/Allcategories/electronic/electronic";
import Furniture from "./pages/common/Allcategories/furniture/furniture";
import Property from "./pages/common/Allcategories/property/property";
import Mobile from "./pages/common/Allcategories/mobile/mobile";
import Services from "./pages/common/Allcategories/services/services";
import Cars from "./pages/common/Allcategories/cars/cars";
import App_menu from "./section/Pages_menu/Pages_menu";
import BackToTopButton from "./components/buttons/BackToTopButton/BackToTopButton";
import AppProduct from "./section/product/product";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Header
            style={{
              margin: 0,
              padding: 0,
              width: "auto",
              height: "auto",
              backgroundColor: "white",
            }}
            className="position-sticky fixed-top"
          >
            <AppHeader />
          </Header>
          <Content
            style={{
              margin: 0,
              padding: 0,
              width: "100%",
              height: "auto",
              backgroundColor: "white",
            }}
          >
            <App_menu />

            <Routes>
              <Route exact path="/" element={<AppHome />} />
              <Route exact path="about" element={<AppAbout />} />
              <Route exact path="follow" element={<AppFollow_us />} />
              <Route exact path="products" element={<AppProduct />} />
              <Route
                exact
                path="all-categories"
                element={<AppAllcategories />}
              />
              <Route exact path="electronic" element={<Electronic />} />
              <Route exact path="furnitue" element={<Furniture />} />
              <Route exact path="mobile" element={<Mobile />} />
              <Route exact path="property" element={<Property />} />
              <Route exact path="services" element={<Services />} />
              <Route path="/cars" element={<Cars />} />
            </Routes>
            <BackToTopButton />
          </Content>
          <Footer
            style={{
              margin: 0,
              padding: 0,
              width: "auto",
              height: "auto",
              backgroundColor: "white",
            }}
          >
            <FooterApp />
          </Footer>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
