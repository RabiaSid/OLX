import { CarOutlined, 
      HomeOutlined, 
      PlusOutlined,
      SearchOutlined

     }
      from '@ant-design/icons';

import baseColors from '../../constants/colors';
import { Button_top } from '../../assets';
import Popup_button from '../../components/buttons/popup_button/popup_button';
import { useNavigate } from 'react-router'


const style = {

  NavBar: {
    background: baseColors.primaryColor,
  },
 
  
}

const AppHeader = () => {

  const navigate = useNavigate()

  return (
    <>
    <div>
    <div style={{background:baseColors.primaryColor}} >
    <nav className="navbar navbar-expand  container-fluid topBar row " style={style.NavBar}>

    <div className='col-12  d-flex justify-content-start align-items-center'>
    <ul className="navbar-nav">
    <li className="nav-item">
    <a className="nav-link py-0" onClick={() => navigate('/')}><img  width='50px' height='50px' src='logo.svg'/></a>
    </li>
    <li className="nav-item hvr_blue">
      <button className="nav-link icon-btn" onClick={() => navigate('/cars')}> <CarOutlined /> MOTORS</button>
    </li>
    <li className="nav-item hvr_blue">
      <button className="nav-link icon-btn" onClick={() => navigate('/property')}> <HomeOutlined /> PROPERTY</button>
    </li>
  </ul>
</div></nav>


<div className="container-fluid">

  <div className="row container-fluid header ">  
        <div className="col-12 px-0 ">

<nav className="navbar navbar-expand row " style={style.NavBar}>
    
    <span className="nav-item col-md-2  d-none d-md-block text-center" onClick={() => navigate('/')}><img className='img-icon-fluid'  src='logo.svg'/></span>

    <div className='col-12 col-md-8 col-lg-6'>
    <div className='row'>

    <form className=" nav-item form col-12 col-md-6 p-1">
      <select className="form-select form-select fill fs-6 "   aria-label="Default select example">
          <option selected>  Pakistan </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
      </select>
    </form>
    <form className=" nav-item form  col-12  col-md-6 p-1">    
      <div className="input-group input-group ">
          <input type="text" className="form-control fill" placeholder="Search"/>
          <button type="button" className="btn fill search_btn fs-6 "><SearchOutlined /></button>
      </div>
    </form>

    </div></div>
      
      <ul className="nav-item  col-md-2 col-lg-2 text-center d-none d-md-block ">
        <li className="nav-item d-flex justify-content-center d-none d-md-block ">
        <a className='hvr_btn'><Popup_button /></a>
        </li></ul>
        
        <div className="nav-item  col-lg-1  d-none d-lg-block " >
        <a className="nav-link active Button_top row " aria-current="page" href="#">
        <pre className='Button_top1 ' ><PlusOutlined style={{fontSize:'20px'}}/>SELL</pre> 
        </a>
        </div>

               
  </nav>

</div></div></div>

</div>


</div>
</>
  )
}

export default AppHeader
