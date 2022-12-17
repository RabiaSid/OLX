import MenuDivider from 'antd/es/menu/MenuDivider'
import React from 'react'
import { Google_icon1, Google_icon2, Google_icon3 } from '../../../assets'
import '../../../App.css'
import baseColors from '../../../constants/colors';



const style={
    img:{
        width: "100%" ,
        height: "auto",
        backgroundImage: 'cover',
    },
    verticalLine: {
        height: '200px',
        borderLeft: '1px solid ',
        borderColor: `${baseColors.primaryTextColor}`,
        Left : '100%',
    }
}

function Appbanner() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center row mt-3 '>
        <div className=' col-12  col-lg-7 '>
        <div className='row'>
            <div className='col-12 col-lg-8 '>
                <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"  style={style.img}/>
            </div>
            <div className='col-12 col-lg-4 '>
                <h2>TRY THE OLX APP</h2>
                <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>
        </div>
        </div>
        <div className='col-12  col-lg-5' style={style.verticalLine}>
        <div className='row'>
        <div className='col-12'>
        <h3>Get your app today</h3>
        </div>
        <div className='col-4 '>
        <img src={Google_icon1} />
        </div>
        <div className='col-4 '>
        <img src={Google_icon2} />
        </div>
        <div className='col-4 '>
        <img src={Google_icon3} />
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Appbanner