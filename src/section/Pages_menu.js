import { CarOutlined, 
  HomeOutlined, 
  PlusOutlined, 
  MobileTwoTone, 
  PoweroffOutlined, 
  CustomerServiceTwoTone,
  ShopTwoTone,
  HomeTwoTone,
  CarTwoTone

 }
  from '@ant-design/icons';

import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { AutoComplete, Dropdown, message, Space } from 'antd';
import baseColors from '../constants/colors';
import { Button_top } from '../assets';
import Popup_button from '../components/popup_button/popup_button';
import { useNavigate } from 'react-router'


const style = {

    NavBar: {
      background: baseColors.white,
    },
   Dropdawn_Style: {
    color: baseColors.secondaryColor,
    fontSize:'1.4rem',
    textAlign: 'center'
    
  },
    icon_style:{
      color: baseColors.lightBlue,
      fontSize:'1.2rem',
      background: baseColors.lightGrey,
      padding:'5px',
      textAlign:'center',
      width:'40px',
      height:'40px',
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
  ];

function App_menu() {
  return (
    <div>
        <nav className="navbar navbar-expand  navbar-dark font d-flex justify-content-start align-items-center container-fluid  row header_menu " >
    <div className="collapse navbar-collapse " id="collapsibleNavbar">
      <ul className="navbar-nav d-flex justify-content-center p-1 m-0">
        <li className='py-2 d-none d-lg-block'>
      <Dropdown
    menu={{
      items,
      onClick,
      
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={style.Dropdawn_Style}>
         All Categories
        <DownOutlined style={style.Dropdawn_Style}/>
      </Space>
    </a>
  </Dropdown></li>

        <li className="nav-item ">
          <NavLink to='/mobile'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button">
          <MobileTwoTone style={style.icon_style}/>
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
          <CustomerServiceTwoTone style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >Services</a>
          </NavLink>
        </li>  

        <li className="nav-item">
          <NavLink to='/furnitue'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button">
          <ShopTwoTone  style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >Furniture</a>
          </NavLink>
        </li> 

        <li className="nav-item">
          <NavLink to='/property'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button">
          <HomeTwoTone style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >Property</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/cars'>
          <a className="nav-link text-dark d-block d-lg-none row">
          <button className=" d-flex justify-content-center align-item-center btn" type="button">
          <CarTwoTone style={style.icon_style}/>
          </button>
          </a>
          <a className="nav-link text-dark d-none d-lg-block" >car</a>
          </NavLink>
        </li>
      </ul>
    </div>
   </nav>
    </div>
  )
}

export default App_menu