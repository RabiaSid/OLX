import React from 'react'
import { Layout, Menu } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route 
}from "react-router-dom"

import AppHeader from './section/HeadApp'

import AppAbout from './pages/common/about/about';
import AppContact from './pages/contact';
import AppAllcategories from './pages/allcategories';
import AppHome from './pages/common/home/home';


const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className='App'>
    <Layout>
      <Router>
    <Header style={{margin: 0, padding: 0, width: 'auto' , height: 'auto', backgroundColor: 'white'}}>
        <AppHeader />
   </Header>
   <Content style={{margin: 0, padding: 0, width: '100%' , height: 'auto', backgroundColor: 'white'}}>
      <Routes>
        <Route path='/' element={<AppHome />}/>
        <Route path='about' element={<AppAbout />}/>
        <Route path='contact' element={<AppContact />}/>
        <Route path='all-categories' element={<AppAllcategories />}/>
  </Routes>
   </Content>
   </Router>
    </Layout>
    </div>
  )
}

export default App
