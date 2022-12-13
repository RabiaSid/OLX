import { CarOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import baseColors from '../constants/colors';
import { Button_top } from '../assets';
import Popup_button from '../components/popup_button/popup_button';



const Dropdawn_Style = {
  color: baseColors.secondaryColor,
  fontSize:'1.4rem',
  textAlign: 'center'
  
};



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

const AppHeader = () => {
  return (
    <>
    <nav className="navbar navbar-expand bg-light p-0 container-fluid topBar row" >

    <div className='col-12  d-flex justify-content-start align-items-center py-2'>
    <ul className="navbar-nav">
    <li className="nav-item">
    <a className="nav-link py-0" href="#"><img  width='50px' height='50px' src='logo.svg'/></a>
    </li>
    <li className="nav-item hvr_blue">
      <a className="nav-link" href="#"> <CarOutlined /> MOTORS</a>
    </li>
    <li className="nav-item hvr_blue">
      <a className="nav-link" href="#"> <HomeOutlined /> PROPERTY</a>
    </li>
  </ul>
</div></nav>


<div className='container-fluid '>
<nav className="navbar navbar-expand d-flex  justify-content-center align-items-center header p-0 m-0 row">
  
    
    {  /* logo */ }
  
    
    <a className="nav-item col-1 p-2 d-none d-lg-block" href="#"><img className='img-icon-fluid'  src='logo.svg'/></a>

    <div className='col-12 col-md-7'>
    <div className='row'>

    <form className=" nav-item form col-12 col-md-6 p-2">
      <select className="form-select form-select fill"   aria-label="Default select example">
          <option selected>  Pakistan </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
      </select>
    </form>
    <form className=" nav-item form  col-12  col-md-6 p-2">    
      <div className="input-group input-group ">
          <input type="text" className="form-control fill" placeholder="Search"/>
          <button type="button" className="btn fill">Search</button>
      </div>
    </form>

    </div></div>
      
      <ul className="nav-item p-0 m-0 col-1 d-flex justify-content-center align-items-center d-none d-lg-block">
        <li className="nav-item d-flex justify-content-center d-none d-md-block py-2 ">
        <Popup_button />
        </li></ul>
        
        <div className="nav-item p-0 m-0 col-3  row Button_top d-none d-xl-block" >
        <div class="nav-item  px-1 pb-5 col-12">
        <a class="nav-link active Button_top " aria-current="page" href="#">
        <img  className='Button_top1 ' src={ Button_top } width="200px" height="80px"/>
        <pre className='Button_top2 ' ><PlusOutlined/>SELL</pre> 
        </a>
        </div>
        </div>
      
        
</nav></div>


<nav className="navbar navbar-expand  navbar-dark py-0 font d-flex justify-content-start container-fluid header_menu m-auto" >
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav d-flex justify-content-center p-1 m-0">
        <li className='py-2 d-none d-md-block'>
      <Dropdown
    menu={{
      items,
      onClick,
      
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={Dropdawn_Style}>
         item
        <DownOutlined style={Dropdawn_Style}/>
      </Space>
    </a>
  </Dropdown></li>
        <li className="nav-item ">
          <NavLink to='/'>
          <a className="nav-link text-dark ">Home</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about'>
          <a className="nav-link text-dark " >About</a>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact'>
          <a className="nav-link text-dark " >Contact</a>
          </NavLink>
        </li>  
        <li className="nav-item">
          <NavLink to='/allcategories'>
          <a className="nav-link text-dark " >AllCategories</a>
          </NavLink>
        </li>
      </ul>
    </div>
   </nav>
</>
  )
}

export default AppHeader
