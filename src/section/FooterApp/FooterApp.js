import React from 'react'
import { useNavigate } from 'react-router'
import baseColors from '../../constants/colors'
import { Google_icon1, Google_icon2, Google_icon3 } from '../../assets/index'
import {  FacebookFilled, GoogleCircleFilled  , MailFilled, PhoneFilled  } from '@ant-design/icons';

const style={
    footer:{
        width:"100%",
        height:"auto",
        minHeight: '410px',
        background: baseColors.lightGrey

    },
    heading:{
        fontSize: '1.4rem',
        color: baseColors.darkTextColor,
        lineHeight:  1.6,

    },
    list:{
        textDecoration: 'none',
	    listStyleType: 'none',
	    paddingLeft: '0rem',
        fontSize: '1rem',
        color: baseColors.primaryTextColor,
    },
    footerBottom:{
        width:"100%",
        height:"70px",
        background: baseColors.secondaryColor,
        color: baseColors.white,
        fontSize: '0.8rem',
    },
    a:{
        textDecoration : 'none'
    },
    icon:{
        fontSize: '1rem',
        color: baseColors.primaryTextColor,
        padding: '2px',
        
    }

}

function FooterApp() {

    const navigate = useNavigate()


  return (
    <div>
    
    <footer className=" row m-0 p-0"  >
    <div className="col-12 " style={style.footer}>
    <div className="row  container text-left py-4 " >
            <div className="col-12 col-md-6 col-lg-3 text-left">
            <h4 style={style.heading}>Categories</h4>
                <div>
                <ul style={style.list}>
                    
                <li onClick={() => navigate('/cars')}><span>Car</span></li>
                <li onClick={() => navigate('/mobile')}><span>Mobile</span></li>
                <li onClick={() => navigate('/electronic')}><span>Electronic</span></li>
                <li onClick={() => navigate('/property')}><span>Property</span></li>
                <li onClick={() => navigate('/services')}><span>Services</span></li>
                <li onClick={() => navigate('/furnitue')}><span>Furniture</span></li></ul></div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 text-left">
            <h4 onClick={() => navigate('/about') } style={style.heading}> About US</h4>
                <div>
                <ul style={style.list}>
                <li><a href='https://www.empg.com/'>About EMPG</a></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li></ul></div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-left">
            <h4 onClick={() => navigate('/') }  style={style.heading}> Olx</h4>
                <div>
                <ul style={style.list}><li><span>Email</span></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li></ul></div>
            </div>
        <div className="col-12 col-md-12 col-lg-4 text-left ">
        <span style={style.heading}>
        <div className='row'>
        <div className='col-12 pb-4'>
        <h3 style={style.heading}>Follow US</h3>
        </div>
        <div className='col-12 '>
        <span><a href="https://www.facebook.com/" style={style.a}> <FacebookFilled style={style.icon}/> </a></span>
        <span><a href="https://www.google.com/" style={style.a}> <GoogleCircleFilled style={style.icon}/> </a></span>
        <span><a href="https://mail.google.com/" style={style.a}> <MailFilled style={style.icon}/></a> </span>
        <span><a href='' onClick={() => navigate('/follow')} style={style.a}><PhoneFilled style={style.icon}/> </a> </span>
        </div>
        <div className='col-12 col-sm-4'>
        <img src={Google_icon1} />
        </div>
        <div className='col-12 col-sm-4'>
        <img src={Google_icon2} />
        </div>
        <div className='col-12 col-sm-4'>
        <img src={Google_icon3} />
        </div>
        </div></span>
            </div>
    </div></div>
    <div className='col-12 text-end py-2' style={style.footerBottom}>
                <span className='pe-2'><strong>Free Classifieds in Pakistan</strong></span>
                <span className='pe-2'>. © 2006-2022 OLX</span>
            </div>
    </footer>
    
    </div>
  )
}

export default FooterApp