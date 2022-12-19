import React from 'react'
import { Layout, Menu } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route 
}from "react-router-dom"

import AppHeader from './section/HeadApp/HeadApp'


import AppHome from './pages/common/home/home';
import FooterApp from './section/FooterApp/FooterApp';
import AppAbout from './pages/common/about/about';
import AppFollow_us from './pages/common/Follow_us/follow_us';
import AppAllcategories from './pages/common/Allcategories/index';
import Electronic from './pages/common/Allcategories/electronic/electronic';
import Furniture from './pages/common/Allcategories/furniture/furniture';
import Property from './pages/common/Allcategories/property/property';
import Mobile from './pages/common/Allcategories/mobile/mobile';
import Services from './pages/common/Allcategories/services/services';
import Cars from './pages/common/Allcategories/cars/cars';
import App_menu from './section/Pages_menu/Pages_menu';
import BackToTopButton from './components/buttons/BackToTopButton/BackToTopButton';




const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className='App'>
    <Layout>
      <Router>
    <Header style={{margin: 0, padding: 0, width: 'auto' , height: 'auto', backgroundColor: 'white'}} className="position-sticky fixed-top">
    <AppHeader />
   </Header>
   <Content style={{margin: 0, padding: 0, width: '100%' , height: 'auto', backgroundColor: 'white'}}>
   <App_menu />
      <Routes>
        <Route path='/' element={<AppHome />}/>
        <Route path='about' element={<AppAbout/>}/>
        <Route path='follow' element={<AppFollow_us/>}/>
        <Route path='all-categories' element={<AppAllcategories />}/>
        <Route path='electronic' element={<Electronic />}/>
        <Route path='furnitue' element={<Furniture />}/>
        <Route path='mobile' element={<Mobile />}/>
        <Route path='property' element={<Property />}/>
        <Route path='services' element={<Services />}/>
        <Route path='cars' element={<Cars />}/>
  </Routes>
  <BackToTopButton />
   </Content>
   <Footer style={{margin: 0, padding: 0, width: 'auto' , height: 'auto', backgroundColor: 'white'}}>
    <FooterApp />
   </Footer>
   </Router>
    </Layout>
    </div>
  )
}

export default App
