import {  
  MobileOutlined, 
  PoweroffOutlined, 
  CustomerServiceOutlined,
  ShopOutlined,
  HomeOutlined,
  CarOutlined

 }
  from '@ant-design/icons';

import { NavLink,Link, Outlet } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import {  Dropdown, message, Space } from 'antd';
import baseColors from '../../constants/colors';
import React from 'react';


const style = {

    Navbar: {
      background: baseColors.white,
    },
   Dropdawn_Style: {
    color: baseColors.secondaryColor,
    fontSize:'1.4rem',
    textAlign: 'center'
    
  },
  Dropdawn_Style_Items: {
    color: baseColors.secondaryColor,
    fontSize:'3rem',
    textAlign: 'center'
    
  },
    icon_style:{
      color: baseColors.white,
      fontSize:'1.2rem',
      background: baseColors.secondaryColor,
      padding:'10px',
      textAlign:'center',
      width:'50px',
      height:'50px',
      Border: '1px solid',
      borderRadius: "50%"
    }
  }

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
    {
      label: '4st menu item',
      key: '4',
    },
    {
      label: '5nd menu item',
      key: '5',
    },
    {
      label: '6rd menu item',
      key: '6',
    },
  ];

function App_menu() {
  
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand  navbar-dark font d-flex justify-content-start align-items-center container-fluid  row header_menu fs-5" >
    <div className="collapse navbar-collapse " id="collapsibleNavbar">
      <ul className="navbar-nav d-flex justify-content-center p-1 m-0">
        <li className='py-2 d-none d-lg-block'>
        <NavLink to='/all-categories'>
      <Dropdown
    menu={{
      items,
      onClick,
      
    }}
    style={style.Dropdawn_Style_Items}
   >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={style.Dropdawn_Style}>
         All Categories
        <DownOutlined />
      </Space>
    </a>
  </Dropdown></NavLink></li>

        <li className="nav-item ">
          <NavLink to='/mobile'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button" >
          <MobileOutlined style={style.icon_style}/>
          </button>
          </a>
          {/*<a className='nav-link text-dark d-block d-lg-none justify-content-center align-items-center '><HomeFilled style={style.icon_style}/></a>*/}
          <a className="nav-link text-dark d-none d-lg-block">Mobile</a>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/electronic'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn " type="button">
          <PoweroffOutlined  style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >Electronic</a>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/services'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn " type="button">
          <CustomerServiceOutlined style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >Services</a>
          </NavLink>
        </li>  

        <li className="nav-item">
          <NavLink to='/furnitue'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button">
          <ShopOutlined  style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >Furniture</a>
          </NavLink>
        </li> 

        <li className="nav-item">
          <NavLink to='/property'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button">
          <HomeOutlined style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >Property</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <Link to='/cars' >
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button">
          <CarOutlined style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >car</a>
          </Link>
        </li>
        <li className="nav-item">
          <NavLink to='/about'>
          <a className="nav-link text-dark d-none d-xl-block" >About</a>
          </NavLink>
        </li>
      </ul>
    </div>
   </nav>
   <Outlet />
    </React.Fragment>
  )
}

export default App_menu